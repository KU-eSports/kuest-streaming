import { Snowflake } from "discord.js";
import { Component, createEffect, createSignal, Show } from "solid-js";
import { NodeCGBrowser } from "../../../../../../../types/browser";
import { VoiceTrack } from "../../../../@types/discord";

import styles from "../css/voice.module.css";

type Props = {
  id: Snowflake;
  name: string;
  src: string[];
}
const Voice: Component<Props> = (props) => {
  const id = props.id;
  const name = props.name;
  const src = props.src;

  const nodecg = window.nodecg as NodeCGBrowser;
  const discordRep = nodecg.Replicant<VoiceTrack>("discord", { persistent: false });

  const [getVoice, setVoice] = createSignal<boolean>(false);
  const [getState, setState] = createSignal<boolean>(false);

  setInterval(() => {
    setVoice(getState());
  }, 200);

  createEffect((oldState) => {
    discordRep.on("change", (newValue) => {
      if (newValue.userId !== id) return;
      if (newValue.state === oldState) return;
      setState(newValue.state === "start");
      return newValue.state;
    });
  });

  return (
    <div class={styles.wrapper}>
      <div class={styles.icon}>
        <Show when={getVoice()} fallback={<img class={styles.unspeaking} src={src[0]} />}>
          <img class={styles.speaking} src={src[1]} />
        </Show>
      </div>
      <div class={styles.name}>{name}</div>
    </div>
  );
};

export default Voice;
