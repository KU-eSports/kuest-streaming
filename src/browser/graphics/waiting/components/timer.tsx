import { Component, createEffect, createSignal, Match, Show, Switch } from "solid-js";
import { NodeCGBrowser } from "../../../../../../../types/browser";

import styles from "../css/timer.module.css";

const refresh = 500;

const msToMS = (ms: number) => {
  const ss = Math.ceil(ms / 1000);
  const s = ss % 60;
  const m = Math.round(ss - s) / 60;
  return [m, s];
};

const pad0 = (number: number, length: number) => {
  return ("0".repeat(length) + number).slice(-length);
}

const Timer: Component = () => {
  const nodecg = window.nodecg as NodeCGBrowser;
  const timeRep = nodecg.Replicant("time", { persistent: false });

  const [getTarget, setTarget] = createSignal<number>();
  const [getNow, setNow] = createSignal<number>(new Date().getTime());

  createEffect(() => {
    timeRep.on("change", (newValue) => {
      if (!newValue) return;
      const target = new Date(newValue as string);
      setTarget(target.getTime());
    });
  });

  createEffect(() => {
    setInterval(() => {
      const now = new Date();
      setNow(now.getTime());
    }, refresh);
  });

  return (
    <Show when={getTarget()}>
      {(target) => {
        return (
          <div class={styles.container}>
            <Show when={getNow()}>
              {(now) => {
                const diff = target - now;
                const [minutes, seconds] = msToMS(diff);
                return (
                  <Switch>
                    <Match when={diff > 0}>
                      <div class={styles.timer}>
                        <div class={styles.minutes}>
                          <div class={styles.number}>{pad0(minutes, 2)}</div>
                          <div class={styles.unit}>m</div>
                        </div>
                        <div class={styles.seconds}>
                          <div class={styles.number}>{pad0(seconds, 2)}</div>
                          <div class={styles.unit}>s</div>
                        </div>
                      </div>
                    </Match>
                    <Match when={diff <= 0}>
                      <div class={styles.text}>Coming soon</div>
                    </Match>
                  </Switch>
                );
              }}
            </Show>
          </div>
        );
      }}
      </Show>
  );
};

export default Timer;
