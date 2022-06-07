import { Component, createEffect, createSignal, Match, Show, Switch } from "solid-js";
import { AgentDto } from "../../../../@types/valorant";
import { getAgents } from "../script/api";

import styles from "../css/agent.module.css";

const refresh = 10000;

const Agent: Component = () => {

  const [getAgent, setAgent] = createSignal<AgentDto>();

  createEffect(() => {
    (async () => {
      const agents = await getAgents();
      let agent = agents[Math.floor(Math.random() * agents.length)];
      const pick = () => {
        const filteredAgents = agents.filter(a => a.uuid !== agent.uuid);
        agent = filteredAgents[Math.floor(Math.random() * filteredAgents.length)];
        setAgent(agent);
      }
      pick();
      setInterval(pick, refresh);
    })();
  });

  return (
    <div class={styles.wrapper}>
      <Show when={getAgent()}>
        {(agent) => {
          return (
            <img class={styles.img} src={agent.fullPortraitV2} alt="" />
          )
        }}
      </Show>
    </div>
  );
};

export default Agent;
