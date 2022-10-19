import type { FunctionComponent } from "react";

import styles from "../css/voice.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.name}></div>
          <img className={styles.lefticon} src="" />
        </div>
        <div className={styles.right}>
          <div className={styles.name}></div>
          <img className={styles.righticon} src="" />
        </div>
      </div>
    </div>
  );
};

export default Component;
