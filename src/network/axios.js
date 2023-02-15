import axios from "axios";
import { getItem } from "@/helpers/persistanceStorage";
import { AuthJWT } from "@/helpers/authJWT";
import store from "@/store";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASEURL;

axios.interceptors.request.use((config) => {
  const accessToken = getItem("accessToken");
  const refreshToken = getItem("refreshToken");

  if (accessToken && !AuthJWT.isTokenExpired(accessToken)) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else if (refreshToken && !AuthJWT.isTokenExpired(refreshToken)) {
    config.headers.Authorization = `Bearer ${refreshToken}`;
  } else {
    store.dispatch("auth/logout");
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const accessToken = getItem("accessToken");
    const refreshToken = getItem("refreshToken");
    const { config, response } = error;
    const prevRequestConfig = config;
    if (
      response &&
      response.status === 401 &&
      !prevRequestConfig.sent &&
      AuthJWT.isTokenExpired(accessToken) &&
      !AuthJWT.isTokenExpired(refreshToken)
    ) {
      prevRequestConfig.sent = true;
      await store.dispatch("auth/refreshToken");
      return axios(prevRequestConfig);
    }
    return Promise.reject(error);
  }
);

export default axios;
