import type { FunctionComponent } from "react";

import styles from "../css/stickers.module.css";

import stickers from "../image/stickers.svg";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.stickers} src={stickers} />
    </div>
  );
};

export default Component;
