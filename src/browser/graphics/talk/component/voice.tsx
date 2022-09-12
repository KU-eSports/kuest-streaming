import type { FunctionComponent } from "react";

import { useEffect, useState } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/voice.module.css";

type Props = {
  userId: string;
  name: string;
  src: [string, string];
};
const component: FunctionComponent<Props> = (props) => {
  const userId = props.userId;
  const name = props.name;
  const src = props.src;
  const voice = useReplicant("discordVoice");

  const [state, setState] = useState(false);

  useEffect(() => {
    if (userId !== voice?.userId) return;
    setState(voice.isSpeak ?? false);
  }, [voice]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        {state ? (
          <img className={styles.speaking} src={src[1]} />
        ) : (
          <img className={styles.unspeaking} src={src[0]} />
        )}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default component;
