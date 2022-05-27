import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useContext } from "../../../replicant/context";
import type { NodeCGBrowser } from "../../../../../../types/browser";
import type { MatchDto } from "../../../@types/valorant";

import Layout from "./Layout";

import "./css/style.css";


const App: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const valorantRep = nodecg.Replicant<MatchDto | undefined>("valorant");

  const [_, setValue] = useContext();

  createEffect(() => {
    valorantRep.on("change", (newValue) => {
      setValue(JSON.parse(JSON.stringify(newValue)));
    });
  });
  
  return <Layout />;
};

render(() => <App />, document.getElementById("root") as HTMLElement);
