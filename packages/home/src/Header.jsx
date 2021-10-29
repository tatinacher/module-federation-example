import * as React from "react";
import FederatedWrapper from "./lib/error-handler";

const FallbackHeader = React.lazy(() => import("navigation/build/Header"));
const HeaderMF = React.lazy(() => import("nav/Header"));

export const HeaderWrapper = () => (
  <FederatedWrapper error={<FallbackHeader />}>
    <HeaderMF />
  </FederatedWrapper>
);

export default HeaderWrapper;
