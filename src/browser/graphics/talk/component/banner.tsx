import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/banner.module.css";

const component: FunctionComponent = () => {
  const waiting = useReplicant("waiting");
  const title = (waiting?.title || nodecg.bundleConfig.title) ?? "";

  return (
    <div className={styles.wrapper}>
      <div className={styles.showcase}>
        <div className={styles.marquee}>{title}</div>
      </div>
    </div>
  );
};

export default component;
