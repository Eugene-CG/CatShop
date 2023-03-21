import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Cart } from "../../../features/cart/ui";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCat } from "react-icons/gi";
export const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const toggleShowCart = () => setShowCart(!showCart);

  return (
    <>
      {showCart && <Cart toggleShowCart={toggleShowCart} />}
      <header
        className="w-full p-4 pb-0 flex justify-around bg-gray-50
      "
      >
        <div>
          <NavLink to="/">
            <GiCat className="w-10 h-10 p-1 text-3xl hover:bg-black hover:text-white transition-all duration-1000 border border-solid border-black rounded-full" />
          </NavLink>
        </div>
        <nav className="">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="block lg:hidden"
          >
            <RxHamburgerMenu />
          </button>
          {showPopup && (
            <div
              onClick={() => setShowPopup(!showPopup)}
              className="absolute top-12 left-0 right-0 lg:hidden  flex flex-col z-50"
            >
              <ul className="w-full lex flex-col gap-10">
                <li className="flex items-center justify-center  bg-gray-200">
                  <NavLink
                    className="py-4 text-2xl"
                    to="men's clothing"
                  >
                    Men's clothing
                  </NavLink>
                </li>
                <li className="flex items-center justify-center  bg-gray-200">
                  <NavLink
                    className="py-4 text-2xl"
                    to="jewelery"
                  >
                    Jewelery
                  </NavLink>
                </li>
                <li className="flex items-center justify-center  bg-gray-200">
                  <NavLink
                    className="py-4 text-2xl"
                    to="electronics"
                  >
                    Electronics
                  </NavLink>
                </li>
                <li className="flex items-center justify-center  bg-gray-200">
                  <NavLink
                    className="py-4 text-2xl"
                    to="women's clothing"
                  >
                    Women's clothing
                  </NavLink>
                </li>
              </ul>

              <button
                className="flex items-center justify-center text-2xl bg-gray-200"
                onClick={toggleShowCart}
              >
                Cart
              </button>
            </div>
          )}
          {/* <div className="flex flex-col items-center"> */}
          <ul className="hidden lg:flex gap-6 capitalize">
            <li>
              <NavLink
                to="men's clothing"
                className="p-2 shadow-[inset_0_0_0_0_black] hover:shadow-[inset_200px_0_0_0_black] hover:text-white transition-all duration-300"
              >
                Men's clothing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="jewelery"
                className="p-2 shadow-[inset_0_0_0_0_black] hover:shadow-[inset_200px_0_0_0_black] hover:text-white transition-all duration-300"
              >
                Jewelery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="electronics"
                className="p-2 shadow-[inset_0_0_0_0_black] hover:shadow-[inset_200px_0_0_0_black] hover:text-white transition-all duration-300"
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="women's clothing"
                className="p-2 shadow-[inset_0_0_0_0_black] hover:shadow-[inset_200px_0_0_0_black] hover:text-white transition-all duration-300"
              >
                Women's clothing
              </NavLink>
            </li>
          </ul>
          {/* <p className="mt-2 text-black">Contact Us</p>
          </div> */}
        </nav>
        <button
          className="hidden lg:block border-2 border-black border-y-transparent hover:border-y-2 hover:border-x-transparent hover:border-solid hover:border-black transition-all duration-300"
          onClick={toggleShowCart}
        >
          Cart
        </button>
      </header>
      <Outlet />
    </>
  );
};

// men's clothing
// jewelery
// electronics
// women's clothing
