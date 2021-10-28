import React from "react";
import data from "./primitives";

const App = () => (
  <div>
    <div>Data</div>
    <div>{data.simpleValue}</div>
    <div>[{data.simpleArray.join(", ")}]</div>
  </div>
);

export default App;
