import type { AgentDto } from "../../../../@types/valorant";

export async function getAgents() {
	const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
	const res = await fetch(url);
	const data = await res.json();
	const agents: AgentDto[] = data.data;
	return agents;
}
