import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/footer.module.css";

import logo from "../image/logo/KUeST_logo_alpha.png";

const component: FunctionComponent = () => {
  const map = useReplicant("valorantMap");

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      {!!map && (
        <div className={styles.info}>
          <div className={styles.map}>
            <img src={map.splash} />
            <div className={styles.label}>{map.displayName}</div>
          </div>
          <div className={styles.next}>NEXT MAP</div>
        </div>
      )}
    </div>
  );
};

export default component;
