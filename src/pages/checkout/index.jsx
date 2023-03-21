import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Cart } from "../../features/cart/ui";

export const Checkout = () => {
  const [showCart, setShowCart] = useState(false);
  const toggleShowCart = () => setShowCart(!showCart);

  const productsList = useSelector((state) => state.cart);

  return (
    <div className="lg:w-3/4 mx-auto p-4">
      {showCart && <Cart toggleShowCart={toggleShowCart} />}
      <form className="flex flex-col gap-6">
        <h3 className="text-5xl">To Order</h3>
        <div>
          <h4 className="mb-6 text-2xl">Contact Details</h4>
          <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-7">
            <label
              className={styles.inputName}
              htmlFor="inputName"
            >
              <input
                id="inputName"
                type="text"
                className="w-full h-full p-2 pr-0"
              />
            </label>
            <label
              className={styles.inputSurname}
              htmlFor="inputSurname"
            >
              <input
                id="inputSurname"
                type="text"
                className="w-full h-full p-2 pr-0"
              />
            </label>
            <label
              className={styles.inputPhone}
              htmlFor="inputPhone"
            >
              <input
                id="inputPhone"
                type="text"
                className="w-full h-full p-2 pr-0"
              />
            </label>
            <label
              className={styles.inputMail}
              htmlFor="inputMail"
            >
              <input
                id="inputMail"
                type="text"
                className="w-full h-full p-2 pr-0"
              />
            </label>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-6 text-2xl">
            <h3>Your Order</h3> <p className="opacity-50">На суму: 420$</p>
          </div>

          <div>
            <div className="ml-4 mb-2 flex justify-between text-xl">
              <h4>Purchases</h4>{" "}
              <button
                type="button"
                onClick={toggleShowCart}
              >
                Edit
              </button>
            </div>
            <ul>
              {productsList.map((product) => {
                return (
                  <li
                    key={product.id}
                    className="flex flex-col border-b-2 border-solid border-red-200"
                  >
                    <div className="flex items-start">
                      <div className="w-24 h-24">
                        <img
                          className="w-full h-full p-2 object-cover rounded-md"
                          src={`${product.image}`}
                          alt={`${product.title}`}
                        />
                      </div>
                      <div className="w-full flex flex-col">
                        <div>{product.title}</div>
                        <div>
                          {(product.price * product.amount).toFixed(2)}$
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="my-6 text-2xl">Delivery</h4>
            <div className="ml-4">
              <label htmlFor="input-city">
                <p className="text-xl opacity-80">Choose your city:</p>
                <input
                  type="text"
                  className="w-full sm:w-[320px] py-1 pl-2 rounded-md text-2xl border border-solid border-black"
                />
              </label>
            </div>
          </div>
          <button className="m-6 px-12 py-4 text-3xl capitalize rounded-[5rem] border border-solid border-black">
            confirm the order
          </button>
        </div>
      </form>
    </div>
  );
};
