import { Component } from "solid-js";

import styles from "../css/banner.module.css";

const getLongStr = (str: string) => {
  return `${str}　　　　　${str}　　　　　`;
}

type Props = {
  text: string;
}
const Banner: Component<Props> = (props) => {
  const text = getLongStr(props.text);

  return (
    <div class={styles.wrapper}>
      <div class={styles.showcase}>
        <div class={styles.marquee}>{text}</div>
      </div>
    </div>
  );
};

export default Banner;
