import axios from "@/network/axios";

const getReviewList = () => {
  return axios.get("/api/review/list/");
};

const getUserReviews = (params) => {
  return axios.get("/api/review/user_reviews/", null, { params });
};

const addReview = (params, image) => {
  return axios.post("/api/review/add/", image, params);
};

const editReview = (params) => {
  return axios.post("/api/review/edit/", null, params);
};

export default {
  getReviewList,
  getUserReviews,
  addReview,
  editReview,
};
