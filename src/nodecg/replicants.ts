import type * as replicant from "./generated/index";

type ReplicantMap = {
  waiting: replicant.Waiting;
  speaking: replicant.Speakers;
  map: replicant.Map;
};

export { ReplicantMap };
