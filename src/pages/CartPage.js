import React from "react";
import Cart from "../features/cart/Cart";
import Navbar from "../features/navbar/Navbar";
export default function CartPage() {
  return (
    <div>
      <Navbar>
        <Cart></Cart>
      </Navbar>
    </div>
  );
}
