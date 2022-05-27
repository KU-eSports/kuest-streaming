import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useContext } from "../../../replicant/context";

import type { NodeCGBrowser } from "../../../../../../types/browser";

const App: Component = () => {

  const [getValue, setValue] = useContext();

  createEffect(() => {
    const nodecg = window.nodecg as NodeCGBrowser;
    const rep = nodecg.Replicant("time");
    rep.value = getValue();
  });

  return (
    <div>
      <input type="time" onChange={(e) => setValue(e.target["value"])} />
    </div>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
