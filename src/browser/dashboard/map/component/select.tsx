import type { MapDto } from "@/types/valorant";
import type { FunctionComponent } from "react";

import { useEffect, useState } from "react";

import { getMaps } from "../script/api";

import styles from "../css/select.module.css";

type Props = {
  setMap: Function;
};
const component: FunctionComponent<Props> = (props) => {
  const [maps, setMaps] = useState<MapDto[]>([]);
  const setMap = props.setMap;

  useEffect(() => {
    (async () => {
      const data = await getMaps();
      setMaps(data);
    })();
  }, []);

  const getMap = (uuid: string) => {
    return maps.find((m) => m.uuid === uuid);
  };

  return (
    <div className={styles.select}>
      <select
        onChange={(e) => {
          const map = getMap(e.target.value);
          setMap(map);
        }}
      >
        <option key={undefined} value={undefined}>
          未選択
        </option>
        {maps.map((map) => {
          return (
            <option key={map.uuid} value={map.uuid}>
              {map.displayName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default component;
