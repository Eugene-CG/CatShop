import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Header } from "../widgets/layouts/header";
import { Checkout } from "./checkout";
import { Home } from "./home";
import { homeLoader } from "./home/homeLoader";
import { ProductPage } from "./productPage";
import { productPageLoader } from "./productPage/productPageLoader";
import { ProductsCategory } from "./productsCategory";
import { productsCaregotyLoader } from "./productsCategory/productsCategoryLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Header />}
    >
      <Route
        index
        element={<Home />}
        loader={homeLoader}
      />
      <Route
        path="checkout"
        element={<Checkout />}
      />
      <Route
        path=":productsCategory"
        element={<ProductsCategory />}
        loader={productsCaregotyLoader}
      />
      <Route
        path=":productsCategory/:productId"
        element={<ProductPage />}
        loader={productPageLoader}
      />
    </Route>
    //   path="/"
    //   element={<Header />}
    // >
    //   <Route
    //     index
    //     element={<Home />}
    //     loader={homeLoader}
    //   >
    //     <Route
    //       path=":productsCategory"
    //       element={<ProductsCategory />}
    //       loader={productsCaregotyLoader}
    //     >
    //   <Route
    //     path=":productId"
    //     element={<ProductPage />}
    //   />
    //     </Route>
    //   </Route>
    // </Route>
  )
);
// men's clothing
// jewelery
// electronics
// women's clothing
export const Router = () => {
  return <RouterProvider router={router} />;
};
