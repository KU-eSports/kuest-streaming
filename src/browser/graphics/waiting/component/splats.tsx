import type { FunctionComponent } from "react";

import styles from "../css/splats.css";
import splats from "../image/bluesplats.svg";


const Component: FunctionComponent = () => {
  return <div className={styles.container}>
    <img className={styles.splats}  src={splats}/>
  </div>
};

export default Component;
