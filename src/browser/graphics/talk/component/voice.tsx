import type { FunctionComponent } from "react";

import styles from "../css/voice.module.css";

import toomo from "../image/Toomo.png";
import naka from "../image/N4K4.png";
const talker: { [key: string]: string | undefined } = {
  "346592327701102594": toomo,
  "402750037739831298": naka,
};

type Props = {
  speaker: Speaker;
};
const Component: FunctionComponent<Props> = (props) => {
  const speaker = props.speaker;
  const id = speaker.user.id;
  const avatar = speaker.user.avatar
    ? `https://cdn.discordapp.com/avatars/${speaker.user.id}/${speaker.user.avatar}.jpg`
    : `https://cdn.discordapp.com/embed/avatars/${
        Number(speaker.user.discriminator) % 6
      }.png`;

  return (
    <div className={styles.wrapper}>
      <img
        className={`${styles.icon} ${
          speaker.speaking ? styles.speaking : styles.unspeaking
        }`}
        src={talker[id]}
      />
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.name}>{speaker.nick}</div>
      </div>
    </div>
  );
};

export default Component;
