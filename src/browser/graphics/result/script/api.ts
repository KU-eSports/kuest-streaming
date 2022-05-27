import axios from "axios";
import type { AgentDto, MapDto } from "../../../../@types/valorant";


export async function getAgents() {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";
  const res = await axios.get(url);
  const data = res.data;
  const agents: AgentDto[] = data.data;
  return agents;
}

async function getMaps() {
  const url = "https://valorant-api.com/v1/maps";
  const res = await axios.get(url);
  const data = res.data;
  const maps: MapDto[] = data.data;
  return maps;
}

export async function getMap(mapId: string) {
  const mapName = mapId.substring(mapId.lastIndexOf('/') + 1);
  const maps = await getMaps();
  const map = maps.find(m => m.assetPath.match(mapName));
  return map;
}
