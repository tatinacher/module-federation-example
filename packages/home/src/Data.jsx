import * as React from "react";
import { buttonStyle, dataStyle } from "./lib/styles";

const printConsole = (args) => {
  import("data/function")
    .then(({ default: func }) => func(args))
    .catch((err) => console.log(err));
};

const newClassObject = (args) =>
  import("data/class")
    .then(({ default: myClass }) => {
      return new myClass(args);
    })
    .catch((err) => console.log(`Error getting class: ${err}`));

export const Data = () => {
  const [{ simpleValue, simpleArray, simpleObject }, setValue] = React.useState(
    {}
  );

  React.useEffect(() => {
    newClassObject("home").then((theObject) => {
      theObject.logString();
    });

    import("data/primitives")
      .then(({ default: values }) => {
        setValue(values);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!simpleValue && !simpleArray && !simpleObject) return null;

  return (
    <div>
      <div style={{ fontSize: "large", padding: "20px 0" }}>RemoteData</div>
      Value:
      <span style={dataStyle}>{simpleValue}</span>
      <br />
      <br />
      Array:
      <span style={dataStyle}>[{simpleArray.join(", ")}]</span>
      <br />
      <br />
      Object:
      <span style={dataStyle}>{JSON.stringify(simpleObject)}</span>
      <div>
        <button style={buttonStyle} onClick={printConsole}>
          Remote print to console
        </button>
      </div>
    </div>
  );
};
