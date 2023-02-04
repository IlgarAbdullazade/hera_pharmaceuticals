import axios from "@/network/axios";

const checkout = (params) => {
  return axios.post("/api/order/checkout/", null, {
    params: { ...params, country: "USA" },
  });
};

const getOrderList = (params) => {
  return axios.get("/api/order/list/", params);
};

export default {
  checkout,
  getOrderList,
};
