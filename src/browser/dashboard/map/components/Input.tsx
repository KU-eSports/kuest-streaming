import { Component, createEffect, createSignal } from "solid-js";
import { MapDto } from "../../../../@types/valorant";

import { useContext } from "../../../../replicant/map";

import styles from "../css/input.module.css"
import { getMaps } from "../script/api";

const Input: Component = () => {

  const [_, setValue] = useContext();

  const [maps, setMaps] = createSignal<MapDto[]>();

  createEffect(() => {
    (async () => {
      const select = document.getElementById("select");
      if (!select) return;
      const maps = await getMaps();
      setMaps(maps);
      (select as HTMLSelectElement).options[0] = new Option(undefined);
      maps.forEach((map, index) => {
        (select as HTMLSelectElement).options[index+1] = new Option(map.displayName);
      });
    })();
  });

  return (
    <div class={styles.wrapper}>
      <select class={styles.input} id="select" onChange={(e) => {
        const map = maps()?.find(map => map.displayName === e.target["value"]);
        setValue(map);
      }}/>
    </div>
  );
};

export default Input;
