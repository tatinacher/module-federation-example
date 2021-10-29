import * as React from "react";
import variants from "./variants";

const selector = ({ variants }) => {
  const length = variants.length;
  const random = Math.floor(Math.random() * length);
  return variants[random];
};

const ChosenVariant = () => {
  const Chosen = selector(variants);
  return (
    <React.Suspense fallback={<div>Loading variant</div>}>
      <div>A/B Test (Reload page)</div>
      <Chosen />
    </React.Suspense>
  );
};

export default ChosenVariant;
