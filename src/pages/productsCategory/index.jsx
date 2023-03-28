import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ProductLink } from "../../entities/productLink";

export const ProductsCategory = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="m-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {products.map((product) => {
        // Lmao
        if (product.title === "Solid Gold Petite Micropave ") return;
        if (
          product.title ===
          "Pierced Owl Rose Gold Plated Stainless Steel Double"
        )
          return;
        // Lmao
        return (
          <Link
            to={`/catshop/${product.category}/${product.id}`}
            key={product.id}
            className="   flex flex-col justify-between items-center  
            border border-solid border-gray-400 rounded-md opacity-90 hover:opacity-100 hover:border-blue-500 transition-all duration-200"
          >
            <div className="flex flex-col items-center p-4">
              <div className="max-w-80 max-h-80 p-2 overflow-hidden">
                <img
                  src={`${product.image}`}
                  className="w-full max-h-full object-cover rounded-md"
                  alt={product.title}
                />
              </div>
            </div>
            <div className="p-4 flex flex-col  text-2xl italic">
              <p className=" overflow-hidden pt-3 text-base">
                {`${product.title.slice(0, 20) + "..."}`}
              </p>
              <p className="self-center ">{product.price}$</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
