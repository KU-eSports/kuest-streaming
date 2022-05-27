import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useContext } from "../../../replicant/context";

import type { NodeCGBrowser } from "../../../../../../types/browser";

import Layout from "./Layout";
import { MatchDto } from "../../../@types/valorant";

import "./css/style.css";

const App: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const valorantRep = nodecg.Replicant<MatchDto | undefined>("valorant");

  const [getValue, setValue] = useContext();

  createEffect(() => {
    valorantRep.on("change", (newValue) => {
      setValue(JSON.parse(JSON.stringify(newValue)));
    });
  })

  createEffect(() => {
    console.log(getValue())
  })
  
  return <Layout />;
};

render(() => <App />, document.getElementById("root") as HTMLElement);
