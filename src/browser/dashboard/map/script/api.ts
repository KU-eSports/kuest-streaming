import axios from "axios";
import type { MapDto } from "../../../../@types/valorant";


export async function getMaps() {
  const url = "https://valorant-api.com/v1/maps";
  const res = await axios.get(url);
  const data = res.data;
  const maps: MapDto[] = data.data;
  return maps;
}
