import { render } from "solid-js/web";

import { Component } from "solid-js";
import Timer from "./Timer";

import "./css/style.css";

const App: Component = () => {

  return <Timer />;
};

render(() => <App />, document.getElementById("root") as HTMLElement);
