import { Component, createEffect, createSignal, Show } from "solid-js";
import type { NodeCGBrowser } from "../../../../../../../types/browser";

import { MapDto } from "../../../../@types/valorant";

import styles from "../css/footer.module.css";

import logo from "../assets/logo/KUeST_logo_alpha.png"

const Footer: Component = () => {

  const nodecg = window.nodecg as NodeCGBrowser;
  const mapRep = nodecg.Replicant("map", { persistent: false });

  const [getMap, setMap] = createSignal<MapDto>();

  createEffect(() => {
    mapRep.on("change", (newValue) => {
      setMap(newValue as (MapDto | undefined));
    });
  });

  return (
    <div class={styles.wrapper}>
      <div class={styles.logo}>
        <img src={logo} />
      </div>
      <Show when={getMap()}>
        {(map) => {
          return (
            <div class={styles.info}>
              <div class={styles.map}>
                <img src={map.splash} />
                <div class={styles.label}>
                  {map.displayName}
                </div>
              </div>
              <div class={styles.next}>
                NEXT MAP
              </div>
            </div>
          );
        }}
      </Show>
    </div>
  );
};

export default Footer;
