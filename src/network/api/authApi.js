import axios from "@/network/axios";

const login = (credentials) => {
  return axios.post("/api/auth/sign_in/", null, {
    params: credentials,
  });
};

const register = (credentials) => {
  return axios.post("/api/auth/sign_up/", null, {
    params: credentials,
  });
};

const refreshToken = () => {
  return axios.post("/api/auth/refresh/");
};

export default {
  login,
  register,
  refreshToken,
};
