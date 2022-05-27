import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useContext } from "../../../replicant/context";

import type { NodeCGBrowser } from "../../../../../../types/browser";

const App: Component = () => {

  const [getValue, setValue] = useContext();

  createEffect(() => {
    const nodecg = window.nodecg as NodeCGBrowser;
    const rep = nodecg.Replicant("test");
    rep.on("change", (newValue) => {
      if (!newValue) return;
      const target = new Date(newValue as string);
      setValue(target);
    });
  });

  return (
    <div>{`${getValue()}`}</div>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
