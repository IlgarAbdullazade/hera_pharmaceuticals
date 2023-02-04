import axios from "@/network/axios";

const getCart = () => {
  return axios.get("/api/cart/get/");
};

const cartUpdate = (params) => {
  return axios.post("/api/cart/update/", null, { params });
};

const acceptPromoCode = (promo_code) => {
  return axios.post(`/api/cart/accept_promo_code/${promo_code}/`);
};

export default {
  getCart,
  cartUpdate,
  acceptPromoCode,
};
