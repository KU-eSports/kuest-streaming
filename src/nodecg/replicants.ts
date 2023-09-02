import type * as replicant from "./generated/index";

type ReplicantMap = {
	waiting: replicant.Waiting;
	speakers: replicant.Speakers;
	splatoon3Map: replicant.Splatoon3Map;
};

export { ReplicantMap };
