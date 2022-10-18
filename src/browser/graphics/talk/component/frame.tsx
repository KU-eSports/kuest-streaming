import type { FunctionComponent } from "react";

import Info from "./info";
import Title from "./title";

import styles from "../css/frame.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Info />
      </div>
      <div className={styles.info}>
        <Title />
      </div>
      <div className={styles.right}></div>
      <div className={styles.lefttop}></div>
      <div className={styles.leftbottom}></div>
    </div>
  );
};

export default Component;
