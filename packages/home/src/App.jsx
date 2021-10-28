import React from "react";
import ReactDOM from "react-dom";

import { Cart } from "./feature";
import { wrapComponent } from "./lib/error-handler";

import "./index.css";

const Header = wrapComponent(React.lazy(() => import("nav/Header")));

const App = () => (
  <div style={{ backgroundColor: "#bddedb", padding: 20 }}>
    <div style={{ fontSize: "xx-large", padding: "20px 0" }}>Home App</div>
    <Header />
    <div style={{ padding: "20px 0" }}>This is a host application</div>
    <Cart />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
