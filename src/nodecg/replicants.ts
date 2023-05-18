import * as replicant from "./generated/index";

type ReplicantMap = {
	waiting: replicant.Waiting;
	speaking: replicant.Speakers;
	valorantMap: replicant.ValorantMap;
};

export { ReplicantMap };
