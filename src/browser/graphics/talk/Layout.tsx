import { Component } from "solid-js";
import Voice from "./components/voice";

import styles from "./css/Layout.module.css";

import toomo_default from "./assets/toomo/default.gif";
import toomo_speak from "./assets/toomo/speak.gif";
const toomo_src = [toomo_default, toomo_speak];

import secchanu_default from "./assets/secchanu/default.png";
import secchanu_speak from "./assets/secchanu/speak.png";
import Banner from "./components/banner";
const secchanu_src = [secchanu_default, secchanu_speak];

const Layout: Component = () => {

  return (
    <div class={styles.container}>
      <div class={styles.header}>
        <Banner text="KUeST - VALORANT CUSTOM GAME" />
      </div>
      <div class={styles.voices}>
        <Voice id="346592327701102594" name="Toomo" src={toomo_src} />
        <Voice id="197321407762399233" name="secchanu" src={secchanu_src} />
      </div>
      <div class={styles.footer}>
        
      </div>
    </div>
  );
};

export default Layout;
