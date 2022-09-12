import type { FunctionComponent } from "react";

import { useEffect, useState } from "react";

import styles from "../css/timer.module.css";

const ISO2date = (iso: string) => {
  const date = new Date(iso);
  return date;
};

const minutes2date = (minutes: string) => {
  const num = parseInt(minutes);
  const date = new Date();
  date.setMinutes(date.getMinutes() + num);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

const pad0 = (number: number, length: number) => {
  return ("0".repeat(length) + number).slice(-length);
};

const getISO = (date: Date) => {
  const yyyy = date.getFullYear();
  const MM = pad0(date.getMonth() + 1, 2);
  const dd = pad0(date.getDate(), 2);
  const hh = pad0(date.getHours(), 2);
  const mm = pad0(date.getMinutes(), 2);
  const iso = `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
  return iso;
};

type Props = {
  setWaiting: Function;
};
const component: FunctionComponent<Props> = (props) => {
  const [now, setNow] = useState(new Date());
  now.setSeconds(0);
  now.setMilliseconds(0);
  const [date, setDate] = useState(now);

  const getMinutes = (date: Date) => {
    const diff = date.getTime() - now.getTime();
    const minutes = Math.ceil(diff / (60 * 1000));
    return minutes;
  };

  const setTimer = (timer: Date) => {
    setDate(timer);
    props.setWaiting((pre: object) => {
      return {
        ...pre,
        timer: timer.getTime(),
      };
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.timer}>
      <div className={styles.flex}>
        <label>開始/再開 時間</label>
        <div className={styles.folder}>
          <input
            type="datetime-local"
            onChange={(e) => setTimer(ISO2date(e.target.value))}
            value={getISO(date)}
          />
          <p>頃</p>
        </div>
      </div>
      <div className={styles.flex}>
        <label>開始/再開 まで</label>
        <div className={styles.folder}>
          <input
            type="number"
            min={0}
            onChange={(e) => setTimer(minutes2date(e.target.value))}
            value={Math.max(0, getMinutes(date))}
          />
          <p>分</p>
        </div>
      </div>
    </div>
  );
};

export default component;
