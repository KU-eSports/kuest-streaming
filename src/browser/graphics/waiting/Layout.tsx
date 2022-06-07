import { Component } from "solid-js";
import Agent from "./components/Agent";
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
      <div>
      </div>
    </div>
  );
};

export default Layout;
