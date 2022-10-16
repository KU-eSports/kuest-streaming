import type { FunctionComponent } from "react";

import styles from "../css/info.module.css";

import test from "../image/test.png";
import arrow from "../image/arrow.svg";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>
        <div className={styles.next}>Next Map</div>
        <img className={styles.arrow} src={arrow} />
        <div className={styles.name}>ヤガラ市場</div>
        <img className={styles.image} src={test} />
      </div>
    </div>
  );
};

export default Component;
