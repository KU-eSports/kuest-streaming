import type { NodeCG } from "../../../../types/server";

import axios from "axios";

export const valorant = async (nodecg: NodeCG) => {
  const rep = nodecg.Replicant("valorant");
  const ip = "localhost";
  const port = 22062;
  const url = `http://${ip}:${port}`;
  const res = await axios.get(url);
  rep.value = res.data;
}