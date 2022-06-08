import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { NodeCGBrowser } from "../../../../../../types/browser";

import { useContext } from "../../../replicant/map";

import Layout from './Layout';

import "./css/style.css";

const App: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const textRep = nodecg.Replicant("map", { persistent: false });

  const [getValue, _] = useContext();

  createEffect(() => {
    textRep.value = getValue();
  });
  
	return (
    <Layout/>
	);
};

render(() => <App />, document.getElementById("root") as HTMLElement);
