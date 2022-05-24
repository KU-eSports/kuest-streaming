import type { NodeCG } from "../../../../types/server";

export default (nodecg: NodeCG) => {
  const rep = nodecg.Replicant("test");
  let count = 0;
  setInterval(() => {
    rep.value = count;
    count++;
  }, 1000);
}

