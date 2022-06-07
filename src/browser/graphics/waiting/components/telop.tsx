import { Component, createEffect, createSignal, Show } from "solid-js";
import { NodeCGBrowser } from "../../../../../../../types/browser";

import styles from "../css/telop.module.css";

const Telop: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const textRep = nodecg.Replicant("text", { persistent: false });

  const [getText, setText] = createSignal<string>("");

  createEffect(() => {
    textRep.on("change", (newValue) => {
      setText(newValue as string);
    });
  });

  return (
    <div class={styles.wrapper}>
      <Show when={getText()}>
        {(text) => {
          return (
            <div class={styles.editable}>{text}</div>
          )
        }}
      </Show>
      <div class={styles.fixed}>KUeST - VALORANT CUSTOM GAME</div>
    </div>
  );
};

export default Telop;
