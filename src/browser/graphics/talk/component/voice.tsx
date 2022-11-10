import type { FunctionComponent } from "react";

import styles from "../css/voice.module.css";

type Props = {
  speaker: Speaker;
};
const Component: FunctionComponent<Props> = (props) => {
  const speaker = props.speaker;
  const avatar = speaker.user.avatar
    ? `https://cdn.discordapp.com/avatars/${speaker.user.id}/${speaker.user.avatar}.jpg`
    : `https://cdn.discordapp.com/embed/avatars/${
        Number(speaker.user.discriminator) % 6
      }.png`;

  return (
    <div className={styles.wrapper}>
        <img className={`${styles.icon} ${speaker.speaking ? styles.speaking : styles.unspeaking}`} src={avatar} />
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.name}>{speaker.nick}</div>
      </div>
    </div>
  );
};

export default Component;
