import type { FunctionComponent } from "react";

import styles from "../css/background.module.css";
import bg from "../image/bgpattern.svg";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.background}>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={styles.bgimg}
      ></div>
    </div>
  );
};

export default Component;
