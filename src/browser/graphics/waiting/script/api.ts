import axios from "axios";
import type { AgentDto } from "../../../../@types/valorant";


export async function getAgents() {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
  const res = await axios.get(url);
  const data = res.data;
  const agents: AgentDto[] = data.data;
  return agents;
}
