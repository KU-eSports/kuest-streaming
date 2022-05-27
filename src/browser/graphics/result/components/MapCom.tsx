import { Component } from "solid-js";
import type { MapDto } from "../../../../@types/valorant";

import styles from "../css/MapCom.module.css";


type Props = {
  map: MapDto;
}
const MapCom: Component<Props> = (props) => {
  const map = props.map;

  return (
    <div class={styles.map}>
      <img src={map.splash} />
      <div class={styles.text}>
        <div class={styles.key}>MAP</div>
        <div class={styles.value}>{map.displayName.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default MapCom;
