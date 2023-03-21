import { getAllProducts } from "../../shared/api/utils/network";

export const homeLoader = async () => {
  const res = getAllProducts();
  return res;
};
