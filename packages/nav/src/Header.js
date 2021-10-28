import React from "react";
import model from "home/cart";
import { reflect } from "@effector/reflect";

const HeaderBlock = ({ cart, increment }) => (
  <header
    style={{
      fontSize: "xx-large",
      backgroundColor: "#313D5A",
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
          backgroundColor: "#D62839",
          color: "white",
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

const Header = reflect({
  view: HeaderBlock,
  bind: {
    cart: model.$cart,
    increment: model.incrementCart,
  },
});

export default Header;
