import { getCategoryProducts } from "../../shared/api/utils/network";

export const productsCaregotyLoader = async ({ params }) => {
  const { productsCategory: category } = params;

  const res = getCategoryProducts(category);
  return res;
};
