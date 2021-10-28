import React from "react";
import ReactDOM from "react-dom";

const loadComponent = (scope, module) => {
  return () =>
    window[scope].get(module).then((factory) => {
      const Module = factory();
      return Module;
    });
};

const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const scriptElement = document.createElement("script");
    scriptElement.src = url;
    scriptElement.type = "text/javascript";
    scriptElement.async = true;

    setReady(false);
    setFailed(false);

    scriptElement.onload = () => {
      console.log(`Dynamic Script Loaded`);
      setReady(true);
    };

    scriptElement.onerror = () => {
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(scriptElement);

    return () => {
      document.head.removeChild(scriptElement);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

const DynamicLoader = ({ url, scope, module }) => {
  const { ready, failed } = useDynamicScript(url);
  console.log(ready, failed, document);

  console.log(url, scope, module);

  if (!url && !scope && !module) {
    return <div>Specify settings!</div>;
  }
  if (!ready) {
    return <div>Loading script from {url}</div>;
  }
  if (failed) {
    return <div>Failed to load script from {url}</div>;
  }
  const Component = React.lazy(loadComponent(scope, module));

  return (
    <React.Suspense fallback="Loading">
      <Component />
    </React.Suspense>
  );
};

const App = () => (
  <div>
    <div>Dynamicly loaded from App</div>
    <br />
    <DynamicLoader
      url="http://localhost:3002/remoteEntry.js"
      scope="data"
      module="./Widget"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
