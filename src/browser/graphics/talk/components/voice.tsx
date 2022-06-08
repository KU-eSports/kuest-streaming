import { Snowflake } from "discord.js";
import { Component, createEffect, createSignal } from "solid-js";
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

  createEffect(() => {
    let oldState = "end";
    discordRep.on("change", (newValue) => {
      if (newValue.userId !== id) return;
      if (newValue.state === oldState) return;
      switch (newValue.state) {
        case "start": {
          setVoice(true);
          break;
        }
        case "end": {
          setVoice(false);
          break;
        }
      }
      oldState = newValue.state
    });
  });

  return (
    <div class={styles.wrapper}>
      <div class={styles.icon}>
        <img class={getVoice() ? styles.speaking : styles.unspeaking} src={getVoice() ? src[1] : src[0]} />
      </div>
      <div class={styles.name}>{name}</div>
    </div>
  );
};

export default Voice;
