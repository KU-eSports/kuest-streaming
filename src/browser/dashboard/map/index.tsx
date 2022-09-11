import type { FunctionComponent } from "react";
import { useState } from "react";
import Display from "./component/display";
import Select from "./component/select";
import Submit from "./component/submit";

import "modern-normalize";
import styles from "./css/style.module.css";

const Component: FunctionComponent = () => {
  const [map, setMap] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <Display map={map} />
      </div>
      <div className={styles.flex}>
        <div className={styles.select}>
          <Select setMap={setMap} />
        </div>
        <div className={styles.submit}>
          <Submit map={map} />
        </div>
      </div>
    </div>
  );
};

export default Component;
