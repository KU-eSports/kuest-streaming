import type { MapDto } from "@/types/valorant";

export async function getMaps() {
  const url = "https://valorant-api.com/v1/maps";
  const res = await fetch(url);
  const data = await res.json();
  const maps: MapDto[] = data.data;
  return maps;
}
