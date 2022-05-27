import { Component, createEffect, createSignal } from "solid-js";
import { useContext } from "../../../../replicant/context";
import type { MapDto, MatchDto, TeamDto } from "../../../../@types/valorant";

import MapCom from "./MapCom";
import Point from "./Point";

import styles from "../css/Header.module.css";

import { getMap } from "../script/api";


const Header: Component = () => {

  const [getResult, _] = useContext();

  const [getTeams, setTeams] = createSignal<TeamDto[]>();
  const [getMapData, setMapData] = createSignal<MapDto>();

  createEffect(() => {
    const result = getResult() as (MatchDto | undefined);
    if (!result) return;
    const teams = result.teams;
    teams.sort((a, b) => {
      return (a.won > b.won) ? -1 : 1;
    });
    setTeams(teams);
    (async () => {
      const map = await getMap(result.matchInfo.mapId);
      setMapData(map);
    })();
  });

  return (
    <div class={styles.wrapper}>
      {getTeams() && <Point team={getTeams()![0]} />}
      {getMapData() && <MapCom map={getMapData()!}/>}
      {getTeams() && <Point team={getTeams()![1]} />}
    </div>
  );
};

export default Header;
