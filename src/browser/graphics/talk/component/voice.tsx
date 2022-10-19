import type { FunctionComponent } from "react";

import styles from "../css/voice.module.css";

import icontest from "../image/icontest.gif"

const Component: FunctionComponent = () => {
  return (
        <div className={styles.container}>
          <img className={styles.icon} src={icontest} />
          <div className={styles.name}>
            <span>secchanu</span>
          </div>
          <div className={styles.box}></div>
        </div>
  );
};

export default Component;
