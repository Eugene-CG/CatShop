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
    <div className="mt-6 flex flex-col items-center md:flex-row md:items-stretch justify-center gap-4">
      <div>
        <img
          src={`${product.image}`}
          alt={`${product.title}`}
          className="max-h-[700px] p-8 border border-solid border-red-50 rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2 text-xl">
          <p className="text-2xl font-semibold">{product.title}</p>
          <p className="ml-4 capitalize ">{product.category}</p>
          <p className="ml-4  w-96 text-base opacity-70">
            {product.description}
          </p>
          <p>Price: {product.price}$</p>
        </div>
        <div>
          <button
            onClick={addProduct}
            className="
          mt-4 px-16 py-4
          border-2 border-solid border-blue-400 rounded-[3rem]
          text-xl font-bold
          hover:text-white hover:bg-black transition-all duration-300"
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
