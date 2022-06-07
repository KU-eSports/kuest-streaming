import { Component } from "solid-js";

import { useContext } from "../../../../replicant/time";

import styles from "../css/input.module.css"

const Input: Component = () => {

  const [_, setValue] = useContext();

  return (
    <div class={styles.wrapper}>
      <input class={styles.input} type="datetime-local" onChange={(e) => setValue(e.target["value"])} />
    </div>
  );
};

export default Input;
