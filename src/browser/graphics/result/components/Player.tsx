import { Component } from "solid-js";
import type { AgentDto, PlayerDto } from "../../../../@types/valorant";

import styles from "../css/Player.module.css";


type Props = {
  player: PlayerDto;
  agent: AgentDto;
  top: boolean;
}
const Player: Component<Props> = (props) => {
  const player = props.player;
  const agent = props.agent;
  const top = props.top;

  const acs = Math.round(player.stats.score / player.stats.roundsPlayed);
  const kda = ((player.stats.kills + player.stats.assists) / player.stats.deaths).toFixed(1);

  return (
    <div class={`${styles.card} ${top ? styles.top : ""}`}>
      <div class={styles.watermark}>
        {top && <div class={styles.mvp}>MVP</div>}
        <div class={`${styles.role} ${top ? styles.top : ""}`}>
          <img src={agent.role.displayIcon}  /></div>
      </div>
      <div class={`${styles.bg} ${top ? styles.top : ""}`}>
        <div class={styles.portrait}>
          <img src={agent.fullPortraitV2} />
        </div>
      </div>
      <div class={styles.info}>
        <div class={styles.name}>
          <div class={styles.user}>{player.gameName}</div>
          <div class={`${styles.agent} ${styles[player.teamId]}`}>as {agent.displayName}</div>
        </div>
        <div class={`${styles.stats} ${top ? styles.top : ""}`}>
          <div class={styles.attr}>
            <div class={`${styles.key} ${styles[player.teamId]}`}>ACS</div>
            <div class={styles.value}>{acs}</div>
          </div>
          <div class={styles.attr}>
            <div class={`${styles.key} ${styles[player.teamId]}`}>KDA</div>
            <div class={styles.value}>{kda}</div>
          </div>
          {top &&
            <div class={styles.attr}>
              <div class={`${styles.key} ${styles[player.teamId]}`}>KILL</div>
              <div class={styles.value}>{player.stats.kills}</div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Player;
