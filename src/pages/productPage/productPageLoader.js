import { getSingleProduct } from "../../shared/api/utils/network";

export const productPageLoader = async ({ params }) => {
  const { productId } = params;

  const res = getSingleProduct(productId);
  return res;
};
