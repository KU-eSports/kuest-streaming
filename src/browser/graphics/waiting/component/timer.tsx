import type { FunctionComponent } from "react";

import { useEffect, useState } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/timer.module.css";

const refresh = 500;

const msToMS = (ms: number): [number, number] => {
  const ss = Math.ceil(ms / 1000);
  const s = ss % 60;
  const m = Math.round(ss - s) / 60;
  return [m, s];
};

const pad0 = (number: number, length: number) => {
  return ("0".repeat(length) + number).slice(-length);
};

const Component: FunctionComponent = () => {
  const [now, setNow] = useState<number>(new Date().getTime());
  const waiting = useReplicant("waiting");
  const timer = waiting?.timer ?? 0;

  const diff = timer - now;
  const [minutes, seconds] = msToMS(diff);

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date().getTime());
    }, refresh);
    return () => clearInterval(id);
  });

  return (
    <div className={styles.container}>
      {diff > 0 ? (
        <div className={styles.timer}>
          <div className={styles.minutes}>
            <div className={styles.number}>{pad0(minutes, 2)}</div>
            <div className={styles.unit}>m</div>
          </div>
          <div className={styles.seconds}>
            <div className={styles.number}>{pad0(seconds, 2)}</div>
            <div className={styles.unit}>s</div>
          </div>
        </div>
      ) : (
        <div className={styles.text}>Coming soon</div>
      )}
    </div>
  );
};

export default Component;