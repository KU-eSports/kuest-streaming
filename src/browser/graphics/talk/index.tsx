import type { FunctionComponent } from "react";

import Background from "./component/background";
import Frame from "./component/frame";
import Voice from "./component/voice";

import "modern-normalize";
import styles from "./css/style.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
      {/* <div>
        <Voice />
      </div> */}
      <div className={styles.frame}>
        <Frame />
      </div>
    </div>
  );
};

export default Component;
