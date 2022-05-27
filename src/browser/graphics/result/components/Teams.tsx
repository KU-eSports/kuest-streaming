import { Component, createEffect, createSignal } from "solid-js";
import { useContext } from "../../../../replicant/context";
import type { AgentDto, MatchDto, PlayerDto } from "../../../../@types/valorant";

import Team from "./Team";

import styles from "../css/Teams.module.css";

import { sortPlayers } from "../script/calc";
import { getAgents } from "../script/api";


const Teams: Component = () => {

  const [getResult, _] = useContext();

  const [getPlayers, setPlayers] = createSignal<PlayerDto[][]>();
  const [getAgentsData, setAgentsData] = createSignal<AgentDto[]>();

  createEffect(() => {
    const result = getResult() as (MatchDto | undefined);
    if (!result) return;
    const sorted = sortPlayers(result);
    setPlayers(sorted);
    (async () => {
      const agents = await getAgents();
      setAgentsData(agents);
    })();
  });

  return (
    <div class={styles.flex}>
      {getPlayers() && getAgentsData() && getPlayers()!.map((players) => {
        return <Team players={players} agents={getAgentsData()!}/>;
      })}
    </div>
  );
};

export default Teams;
