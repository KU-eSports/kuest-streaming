import { render } from "solid-js/web";

import { Component } from "solid-js";

import Layout from "./Layout";

import "./css/style.css";

const App: Component = () => {

  return <Layout />;
};

render(() => <App />, document.getElementById("root") as HTMLElement);
