import { render } from "solid-js/web";

import { Component, createEffect } from "solid-js";
import { useState } from "../../../replicant/state";

import type { NodeCGBrowser } from "../../../../../../types/browser";

const App: Component = () => {

  const [getValue, setValue] = useState();

  createEffect(() => {
    const nodecg = window.nodecg as NodeCGBrowser;
    const rep = nodecg.Replicant("text");
    rep.value = getValue();
  });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target["value"])} />
    </div>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);