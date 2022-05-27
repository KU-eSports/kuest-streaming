import { Component } from "solid-js";
import Header from "./components/Header";

import Teams from "./components/Teams";

import styles from "./css/Layout.module.css";

const Layout: Component = () => {

  return (
    <div class="container">
      <div class={styles.header}>
        <Header />
      </div>
      <div class={styles.teams}>
        <Teams />
      </div>
    </div>
  );
};

export default Layout;
