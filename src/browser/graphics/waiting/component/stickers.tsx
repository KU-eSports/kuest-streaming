import type { FunctionComponent } from "react";

import styles from "../css/stickers.css";
import stickers from "../image/stickers.svg";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img className={styles.stickers} src={stickers} />
    </div>
  );
};

export default Component;
