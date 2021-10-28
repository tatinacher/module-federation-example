import React from "react";
import { reflect } from "@effector/reflect";
import model from "home/cart";

const CartBlock = ({ cart, increment }) => (
  <div>
    <div
      style={{
        fontSize: "large",
      }}
    >
      Count of cart {cart}
    </div>
    <button
      onClick={increment}
      style={{
        fontSize: "large",
        backgroundColor: "#251f22",
        color: "white",
        border: 0,
        padding: 10,
        margin: "10px 0",
        borderRadius: "13px",
      }}
    >
      Add
    </button>
  </div>
);

export const Cart = reflect({
  view: CartBlock,
  bind: { cart: model.$cart, increment: model.incrementCart },
});
