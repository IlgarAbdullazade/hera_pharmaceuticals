import axios from "@/network/axios";

const getUser = () => {
  return axios.get("/api/user/me/");
};

const getAddress = () => {
  return axios.get("/api/user/address/");
};

const changeAddress = (params) => {
  return axios.put("/api/user/change_address/", null, {
    params: {
      ...params,
      country: "USA",
    },
  });
};

const changeEmail = () => {
  return axios.put("/api/user/change_email/");
};

const confirmEmailChange = (params) => {
  return axios.put("/api/user/confirm_email_change/", null, { params });
};

const changePassword = (params) => {
  return axios.put("/api/user/change_password/", params);
};

export default {
  getUser,
  getAddress,
  changeAddress,
  changeEmail,
  confirmEmailChange,
  changePassword,
};
