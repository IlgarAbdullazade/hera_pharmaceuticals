import axios from "@/network/axios";

const getInTouch = (params) => {
  return axios.post("/api/page/get_in_touch", null, { params });
};

export default {
  getInTouch,
};
