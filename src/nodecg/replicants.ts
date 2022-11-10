import * as replicant from "./generated/index";

type ReplicantMap = {
  waiting: replicant.Waiting;
  speaking: replicant.Speaking;
  map: replicant.Map;
};

export { ReplicantMap };
