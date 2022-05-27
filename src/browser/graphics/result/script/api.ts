import axios from "axios";
import { Agent } from "../../../../@types/valorant";

export async function getAgents() {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true"; //language=ja-JP
  const res = await axios.get(url);
  const data = res.data;
  const agents: Agent[] = data.data;
  return agents;
}
