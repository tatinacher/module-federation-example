import React from "react";
import ReactDOM from "react-dom";

import { Cart } from "./feature";
import { wrapComponent } from "./lib/error-handler";
import { Data } from "./Data";

import "./index.css";

const Header = wrapComponent(React.lazy(() => import("nav/Header")));

const App = () => {
  return (
    <div style={{ backgroundColor: "#EAEAEA", padding: 20 }}>
      <div style={{ fontSize: "xx-large", padding: "20px 0" }}>Home App</div>
      <Header />
      <div style={{ padding: "20px 0" }}>This is a host application</div>
      <Cart />
      <Data />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
