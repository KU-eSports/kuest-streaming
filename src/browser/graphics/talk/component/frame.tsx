import type { FunctionComponent } from "react";

import Info from "./info";
import Title from "./title";

import styles from "../css/frame.module.css";

const Component: FunctionComponent = () => {
  return (
    <div>
      <Title />
      <Info />
    </div>
  );
};

export default Component;
