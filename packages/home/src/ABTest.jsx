import React from "react";
import { wrapComponent } from "./lib/error-handler";

export const ABTestSad = wrapComponent(
  React.lazy(() => import("abtestsad/ChosenVariant"))
);
