import { Component } from "solid-js";
import Agent from "./components/agent";
import Telop from "./components/telop";
import Timer from "./components/timer";

import styles from "./css/Layout.module.css";

const Layout: Component = () => {

  return (
    <div class={styles.container}>
      <div class={styles.agent}>
        <Agent />
      </div>
      <div class={styles.timer}>
        <Timer />
      </div>
      <div class={styles.telop}>
        <Telop />
      </div>
    </div>
  );
};

export default Layout;
