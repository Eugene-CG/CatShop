import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductLink = ({ product }) => {
  const loc = useLocation();
  let url;
  if (loc.length > 1) {
    url = url = `${product.id}`;
  } else {
    url = `${product.category}/${product.id}`;
  }

  return (
    <Link
      to={url}
      className="grow-[25%] max-w-[25%] p-[5%] flex items-center content-center border border-solid border-red-50"
    >
      <img
        src={`${product.image}`}
        className="align-middle object-cover"
        alt={product.title}
      />
    </Link>
  );
};
