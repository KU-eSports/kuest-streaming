import { MapDto } from "@/types/valorant";
import type { FunctionComponent } from "react";

import styles from "../css/display.module.css";

type Props = {
  map: MapDto | undefined;
};
const component: FunctionComponent<Props> = (props) => {
  const map = props.map;

  return (
    <div className={styles.display}>
      <img src={map?.splash} />
      {/*TODO 未選択時の画像用意する*/}
    </div>
  );
};

export default component;
