import type { FunctionComponent } from "react";

import styles from "../css/title.module.css";
import logo from "../image/KUeST_logo_alpha.png";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>
        <img className={styles.logo} src={logo} />
        <div className={styles.title}>KUeST Splatoon3 CUSTOM MATCH</div>
      </div>
    </div>
  );
};

export default Component;
