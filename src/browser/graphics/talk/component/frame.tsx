import type { FunctionComponent } from "react";

import Info from "./info";
import Title from "./title";

import styles from "../css/frame.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title />
      </div>
      <div className={styles.info}>
        <Info />
      </div>
      <div className={styles.right}></div>
      <div className={styles.left}></div>
    </div>
  );
};

export default Component;
