import type { FunctionComponent } from "react";

import styles from "../css/submit.module.css";

const waitingRep = nodecg.Replicant("waiting");

type Props = {
  waiting: Object;
};
const component: FunctionComponent<Props> = (props) => {
  const waiting = props.waiting;

  return (
    <div className={styles.submit}>
      <button onClick={() => (waitingRep.value = waiting)}>送信</button>
    </div>
  );
};

export default component;
