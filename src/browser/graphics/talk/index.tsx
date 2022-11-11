import type { FunctionComponent } from "react";

import { useReplicant } from "../../use-replicant";

import Background from "./component/background";
import Frame from "./component/frame";
import Voice from "./component/voice";

import "modern-normalize";
import "../../common/css/splatnet.css";
import styles from "./css/style.module.css";

const allow = nodecg.bundleConfig.discord?.allow ?? [];

const Component: FunctionComponent = () => {
  const speakers = useReplicant("speaking") ?? [];

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={styles.voice}>
        {speakers
          .filter((s) => allow.includes(s.user.id))
          .map((speaker) => {
            return <Voice key={speaker.user.id} speaker={speaker} />;
          })}
      </div>
      <div className={styles.frame}>
        <Frame />
      </div>
    </div>
  );
};

export default Component;
