import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const getAllProducts = () => {
  const request = axios.get(BASE_URL);
  return request.then((response) => response.data);
};
const getSingleProduct = (id) => {
  //this api is bullshit, I swear
  const request = axios.get(`${BASE_URL}/${id}`);
  return request.then((response) => response.data);
};
const getCategoryProducts = (category) => {
  const url = `${BASE_URL}/category/${category}`.replace(/\s/g, "%20");

  const request = axios.get(url);
  return request.then((response) => response.data);
};
export { getAllProducts, getSingleProduct, getCategoryProducts };

// men's clothing
// jewelery
// electronics
// women's clothing
