import React from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addProductToCart } from "../../features/cart/model/cartSlice";

export const ProductPage = () => {
  const product = useLoaderData();
  // addProduct
  const dispatch = useDispatch();
  const addProduct = () => {
    const newProd = {
      ...product,
      amount: 1,
    };
    dispatch(addProductToCart(newProd));
  };
  return (
    <div className="flex justify-center gap-4">
      <div>
        <img
          src={`${product.image}`}
          alt={`${product.title}`}
          className="max-h-[700px] p-8 border border-solid border-red-50 rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col gap-3 text-xl">
          <p className="text-2xl">{product.title}</p>
          <p className="capitalize ">{product.category}</p>
          <p className="w-96 text-base opacity-70">{product.description}</p>
          <p>{product.price}$</p>
        </div>
        <div>
          <button
            onClick={addProduct}
            className="
          px-16 py-4
          border-2 border-solid border-red-100 rounded-[3rem]
          text-xl font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
/**
 *  {
                id:30,
                title:'...',
                price:'...',
                category:'...',
                description:'...',
                image:'...',
                amount:'...',

            }
 */
