import type { FunctionComponent } from "react";

import Background from "./component/background";
import Timer from "./component/timer";
import Telop from "./component/telop";

import "modern-normalize";
import "../../common/css/splatnet.css";
import styles from "./css/style.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
      <div className={styles.timer}>
        <Timer />
      </div>
      {/* <div className={styles.telop}>
        <Telop />
      </div> */}
    </div>
  );
};

export default Component;
