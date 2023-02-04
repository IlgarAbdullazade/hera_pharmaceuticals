import axios from "@/network/axios";

const getPageList = () => {
  return axios.get("/api/page/list/");
};

const getPage = (slug) => {
  return axios.get(`/api/page/get/${slug}/`, { slug: slug });
};

const getInTouch = (params) => {
  return axios.post("/api/page/get_in_touch/", params);
};

export default {
  getPageList,
  getPage,
  getInTouch,
};
