import React from "react";
import { reflect } from "@effector/reflect";
import model from "home/cart";
import { buttonStyle } from "../../lib/styles";

const CartBlock = ({ cart, increment }) => (
  <div>
    <div
      style={{
        fontSize: "large",
      }}
    >
      Count of cart {cart}
    </div>
    <button onClick={increment} style={buttonStyle}>
      Add
    </button>
  </div>
);

export const Cart = reflect({
  view: CartBlock,
  bind: { cart: model.$cart, increment: model.incrementCart },
});
