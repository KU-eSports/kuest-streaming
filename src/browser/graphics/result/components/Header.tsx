import { Component } from "solid-js";

import styles from "../css/Header.module.css";

const Header: Component = () => {

  return (
    <div class={styles.wrapper}>
      <div class={styles.team}>
        <div class={styles.wl}>WIN</div>
        <div class={styles.point}>13</div>
      </div>
      <div class={styles.map}>
        <img src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png" />
      </div>
      <div class={styles.team}>
        <div class={styles.point}>9</div>
        <div class={styles.wl}>LOSS</div>
      </div>
    </div>
  );
};

export default Header;
