import React from "react";
import model from "cart/cart";
import { reflect } from "@effector/reflect";
import { createEvent, createStore, forward } from "effector";

const $navCart = createStore(0);
const navIncrementCart = createEvent();
model.$cart.subscribe(() => console.log("in nav"));

// forward({ from: $cart, to: $navCart });
// forward({ from: incrementCart, to: navIncrementCart });

const HeaderBlock = ({ cart, increment }) => {
  return (
    <header
      style={{
        fontSize: "xx-large",
        backgroundColor: "#251f22",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>Navigation App - remote </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Cart: {cart}</div>
        <button
          style={{
            fontSize: "large",
            backgroundColor: "#f2d42d",
            color: "#251f22",
            border: 0,
            padding: 10,
            margin: "0 10px",
            borderRadius: "13px",
          }}
          onClick={increment}
        >
          Add
        </button>
      </div>
    </header>
  );
};

const Header = reflect({
  view: HeaderBlock,
  bind: {
    cart: model.$cart,
    increment: model.incrementCart,
  },
});

export default Header;
