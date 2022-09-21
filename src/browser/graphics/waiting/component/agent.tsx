import type { AgentDto } from "@/types/valorant";
import type { FunctionComponent } from "react";

import { useEffect, useState } from "react";

import { getAgents } from "../script/api";

import styles from "../css/agent.module.css";

const refresh = 10000;

const Component: FunctionComponent = () => {
  const [agents, setAgents] = useState<AgentDto[]>([]);
  const [agent, setAgent] = useState<AgentDto>();

  useEffect(() => {
    (async () => {
      const data = await getAgents();
      setAgents(data);
    })();
  }, []);

  useEffect(() => {
    const pick = () => {
      setAgent((pre) => {
        const filtered = agents.filter((a) => a.uuid !== pre?.uuid);
        const agent = filtered[Math.floor(Math.random() * filtered.length)]!;
        return agent;
      });
    };
    pick();
    const id = setInterval(pick, refresh);
    return () => clearInterval(id);
  }, [agents]);

  return (
    <div className={styles.wrapper}>
      {agent && (
        <img key={agent.uuid} className={styles.img} src={agent.fullPortrait} />
      )}
    </div>
  );
};

export default Component;
