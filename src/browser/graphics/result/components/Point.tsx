import { Component } from "solid-js";
import { TeamDto } from "../../../../@types/valorant";

import styles from "../css/Point.module.css";

type Props = {
  team: TeamDto;
}
const Point: Component<Props> = (props) => {
  const team = props.team;

  return (
    <div class={`${styles.team} ${styles[team.teamId]} ${team.won ? styles.win : styles.loss}`}>
      <div class={styles.wl}>{team.won ? "WIN": "LOSS"}</div>
      <div class={styles.point}>{team.numPoints}</div>
    </div>
  );
};

export default Point;
