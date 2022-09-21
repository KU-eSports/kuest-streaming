import type { FunctionComponent } from "react";

import Watermark from "./component/watermark";
import Banner from "./component/banner";
import Voice from "./component/voice";
import Footer from "./component/footer";

import "modern-normalize";
import styles from "./css/style.module.css";

import toomo_default from "./image/toomo/default.gif";
import toomo_speak from "./image/toomo/speak.gif";
const toomo_src: [string, string] = [toomo_default, toomo_speak];
import secchanu_default from "./image/secchanu/default.gif";
import secchanu_speak from "./image/secchanu/speak.gif";
const secchanu_src: [string, string] = [secchanu_default, secchanu_speak];

const Component: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Watermark />
      <div className={styles.header}>
        <Banner />
      </div>
      <div className={styles.voices}>
        <Voice userId="346592327701102594" name="Toomo" src={toomo_src} />
        <Voice userId="197321407762399233" name="secchanu" src={secchanu_src} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Component;
