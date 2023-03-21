import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import {
  decreaseProductAmount,
  deleteProductFromCart,
  increaseProductAmount,
} from "../model/cartSlice";
import { Link } from "react-router-dom";
// import { BiDotsVerticalRounded } from "react-icons/bi";

export const Cart = ({ toggleShowCart }) => {
  const productsList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    dispatch(deleteProductFromCart({ id: id }));
  };
  const increaseAmount = (id) => {
    dispatch(increaseProductAmount({ id: id }));
  };
  const decreaseAmount = (id) => {
    dispatch(decreaseProductAmount({ id: id }));
  };
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-gray-500/50 bg-opacity-90">
      <div className="w-full md:w-3/4 lg:w-2/4 p-4 rounded-md bg-white">
        <div className="mb-6 flex justify-between text-3xl border-b-2 border-solid border-black">
          <h4>Cart</h4>
          <button onClick={toggleShowCart}>
            <AiOutlineClose />
          </button>
        </div>
        {!productsList.length ? (
          <div className="flex flex-col items-center justify-center gap-2 text-3xl text-red-500">
            <p>Cart is Empty.</p>
            <button
              onClick={toggleShowCart}
              className="font-serif border-b border-solid border-red-500 hover:text-black hover:border-black transition-all duration-300"
            >
              Buy something maybe
            </button>
          </div>
        ) : (
          productsList.map((product) => {
            return (
              <div
                key={product.id}
                className="mb-2 p-4 flex flex-col border-y border-solid border-gray-300"
              >
                <div className="flex items-start text-xl">
                  <div className="w-24 h-24">
                    <img
                      className="w-full h-full p-2 object-cover rounded-md"
                      src={`${product.image}`}
                      alt={`${product.title}`}
                    />
                  </div>
                  <div className="w-full flex justify-between">
                    <div>{product.title}</div>
                    <button
                      className="h-[24px] hover:text-red-600 transition-all duration-300"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="w-full self-end flex items-center justify-between text-3xl">
                  <div className="w-16 ml-4 flex gap-2 text-3xl items-center">
                    <button onClick={() => decreaseAmount(product.id)}>
                      -
                    </button>
                    <span>{product.amount}</span>
                    <button onClick={() => increaseAmount(product.id)}>
                      +
                    </button>
                  </div>
                  <div>{(product.price * product.amount).toFixed(2)}$</div>
                </div>
              </div>
            );
          })
        )}

        <div className="mt-6 flex justify-between text-2xl">
          <button
            className="capitalize"
            onClick={toggleShowCart}
          >
            continue shopping
            {/* continue shopping must also redirect to home page */}
          </button>
          <Link to="checkout">
            <button className="capitalize">buy all</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
