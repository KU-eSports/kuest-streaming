import type { FunctionComponent } from "react";

import styles from "../css/voice.module.css";

import icontest from "../image/icontest.gif";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={icontest} />
      <div className={styles.container}>
        <div className={styles.box}></div>
        <div className={styles.name}>yyyyyhhhh名無し</div>
      </div>
    </div>
  );
};

export default Component;
