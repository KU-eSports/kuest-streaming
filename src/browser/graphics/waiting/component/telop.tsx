import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/telop.module.css";

const component: FunctionComponent = () => {
  const waiting = useReplicant("waiting");
  const title = (waiting?.title || nodecg.bundleConfig.title) ?? "";
  const message = waiting?.message ?? "";

  return (
    <div className={styles.wrapper}>
      <div className={styles.editable}>{message}</div>
      <div className={styles.fixed}>{title}</div>
    </div>
  );
};

export default component;
