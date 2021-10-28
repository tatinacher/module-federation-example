import React from "react";
import ReactDOM from "react-dom";

import { Cart } from "./feature/cart/view";
import "./index.css";

const wrapComponent =
  (Component) =>
  ({ error, delayed, ...props }) =>
    (
      <FederatedWrapper error={error} delayed={delayed}>
        <Component {...props} />
      </FederatedWrapper>
    );

const Header = wrapComponent(React.lazy(() => import("nav/Header")));

const App = () => {
  return (
    <div style={{ backgroundColor: "#bddedb", padding: 20 }}>
      <div style={{ fontSize: "xx-large", padding: "20px 0" }}>Home App</div>
      <Header />
      <div style={{ padding: "20px 0" }}>This is a host application</div>
      <Cart />
    </div>
  );
};

class FederatedWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.error || <h1>Something went wrong.</h1>;
    }
    return (
      <React.Suspense fallback={this.props.delayed || <div />}>
        {this.props.children}
      </React.Suspense>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
