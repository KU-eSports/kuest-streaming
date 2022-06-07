import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useContext } from "../../../replicant/time";

import type { NodeCGBrowser } from "../../../../../../types/browser";

import Layout from "./Layout";

import "./css/style.css";

const App: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const timeRep = nodecg.Replicant("time", { persistent: false });

  const [getValue, _] = useContext();

  createEffect(() => {
    timeRep.value = getValue();
  });

  return (
    <Layout />
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
