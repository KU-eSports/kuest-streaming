import type { FunctionComponent } from "react";

import styles from "../css/info.module.css";

const Component: FunctionComponent = () => {
  return <div className={styles.wrapper}>
    <div className={styles.next}>Next Map</div>
    <div className={styles.mapname}></div>  {/* TODO ここstyles.じゃない気がする */}
  </div>;
};

export default Component;
