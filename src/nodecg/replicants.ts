import * as replicant from "./generated/index";

type ReplicantMap = {
	waiting: replicant.Waiting;
	speakers: replicant.Speakers;
	valorantMap: replicant.ValorantMap;
};

export { ReplicantMap };
