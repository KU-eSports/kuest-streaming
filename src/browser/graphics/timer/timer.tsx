import { Component, createEffect, createSignal } from "solid-js";
import { NodeCGBrowser } from "../../../../../../types/browser";

import styles from "./css/Layout.module.css";

const refresh = 1000;

const Timer: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const timeRep = nodecg.Replicant("time", { persistent: false });

  const [getTarget, setTarget] = createSignal<Date>();
  const [getNow, setNow] = createSignal<Date>(new Date());

  createEffect(() => {
    timeRep.on("change", (newValue) => {
      if (!newValue) return;
      const target = new Date(newValue as string);
      setTarget(target);
    });
  });

  createEffect(() => {
    const now = getNow();
    setTimeout(() => {
      setNow(new Date());
    }, refresh);
  });

  return (
    <div class="container">
      {getTarget() &&
        <div>{(getTarget()!.getTime() - getNow().getTime())/1000} </div>
      }
    </div>
  );
};

export default Timer;
