import React from "react";
import ProductDetails from "../features/product/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";

export default function () {
  return (
    <Navbar>
      <ProductDetails></ProductDetails>
    </Navbar>
  );
}
