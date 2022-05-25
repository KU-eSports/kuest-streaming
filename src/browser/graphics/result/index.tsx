import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useState } from "../../../replicant/state";

import type { NodeCGBrowser } from "../../../../../../types/browser";

import Layout from "./Layout";

const App: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const valorantRep = nodecg.Replicant("valorant");

  const [getValue, setValue] = useState();

  valorantRep.on("change", (newValue) => {
    setValue(newValue);
  });

  createEffect(() => {
    console.log(getValue())
  })
  

  return <Layout />;
};

render(() => <App />, document.getElementById("root") as HTMLElement);
