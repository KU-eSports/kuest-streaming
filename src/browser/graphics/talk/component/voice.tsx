import type { FunctionComponent } from "react";

import styles from "../css/voice.module.css";

type Props = {
  speaker: {
    mute: boolean;
    nick: string;
    pan: {
      left: number;
      right: number;
    };
    speaking: boolean;
    user: {
      avatar: string | null;
      avatar_decoration: null;
      bot: boolean;
      discriminator: string;
      flags: number;
      id: string;
      premium_type?: number;
      username: string;
    };
    voice_state: {
      deaf: boolean;
      mute: boolean;
      self_deaf: boolean;
      self_mute: boolean;
      suppress: boolean;
    };
    volume: number;
  };
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
      <img className={styles.icon} src={avatar} />
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.name}>{speaker.nick}</div>
      </div>
    </div>
  );
};

export default Component;
