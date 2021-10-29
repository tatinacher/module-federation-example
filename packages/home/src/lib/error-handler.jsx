import React from "react";

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
    console.log(this.props.error, this.props.children);

    if (this.state.hasError) {
      return (
        <React.Suspense fallback={"loading npm module"}>
          {this.props.error}
        </React.Suspense>
      );
    }
    return (
      <React.Suspense fallback={this.props.delayed || <div />}>
        {this.props.children}
      </React.Suspense>
    );
  }
}

export default FederatedWrapper;

// export const wrapComponent =
//   (Component) =>
//   ({ error, delayed, ...props }) =>
//     (
//       <FederatedWrapper error={error} delayed={delayed}>
//         <Component {...props} />
//       </FederatedWrapper>
//     );
