import axios from "@/network/axios";

const getFaqList = () => {
  return axios.get("/api/faq/list");
};

export default {
  getFaqList,
};
