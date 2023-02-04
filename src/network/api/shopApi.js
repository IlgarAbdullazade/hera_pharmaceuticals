import axios from "@/network/axios";

const getCategories = () => {
  return axios.get("/api/store/categories/");
};

const getProducts = (params) => {
  return axios.get(`/api/store/products/${params.slug}/`, {
    params,
  });
};

const getProduct = (slug) => {
  return axios.get(`/api/store/product/${slug}/`, { slug: slug });
};

const getLabtest = (slug) => {
  return axios.get(`/api/store/labtest/${slug}/`, { slug: slug });
};

const searchProduct = (params) => {
  return axios.get("/api/store/search/", { params });
};

export default {
  getCategories,
  getProducts,
  getProduct,
  getLabtest,
  searchProduct,
};
