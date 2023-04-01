import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import {
  addProductToCart,
  deleteProductFromCart,
  increaseProductAmount,
  decreaseProductAmount,
} from "../../features/cart/model/cartSlice";

export const ProductPage = () => {
  const product = useLoaderData();
  console.log(product);
  const [btnIsClicked, setBtnIsClicked] = useState(false);
  const [productAmount, setProductAmount] = useState(1);
  // addProduct
  const dispatch = useDispatch();
  const addProduct = () => {
    const newProd = {
      ...product,
      amount: 1,
    };
    dispatch(addProductToCart(newProd));
    setBtnIsClicked(!btnIsClicked);
  };
  const productsList = useSelector((state) => state.cart);
  const deleteProduct = (id) => {
    dispatch(deleteProductFromCart({ id: id }));
  };
  const increaseAmount = (id) => {
    dispatch(increaseProductAmount({ id: id }));
    setProductAmount(productAmount + 1);
  };
  const decreaseAmount = (id) => {
    dispatch(decreaseProductAmount({ id: id }));
    setProductAmount(productAmount - 1);
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
          {btnIsClicked ? (
            <div className="mt-4 py-2 flex gap-6 items-center text-3xl border-y border-solid border-gray-500">
              <button
                onClick={() => decreaseAmount(product.id)}
                className="w-[70px] p-4 border border-solid border-black rounded-[10rem] hover:bg-gray-300 focus:bg-green-100 transia\
             duration-300"
              >
                -
              </button>
              <div className="border-b-2 border-solid border-black">
                {productAmount}
              </div>
              <button
                onClick={() => increaseAmount(product.id)}
                className="w-[70px] p-4 border border-solid border-black rounded-[10rem] hover:bg-gray-300 focus:bg-green-100 transia\
             duration-300"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={addProduct}
              className="
          mt-4 px-16 py-4
          border-2 border-solid border-blue-400 rounded-[3rem]
          text-xl font-bold
          hover:text-white hover:bg-black transition-all duration-300"
            >
              {btnIsClicked ? "Added to Cart!" : "Add to Cart"}
            </button>
          )}
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
