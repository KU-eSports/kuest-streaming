import { CreateNodecgInstance } from "ts-nodecg/server";

import packageJson from "../../package.json";

import { ReplicantMap } from "../nodecg/replicants";
import { MessageMap } from "../nodecg/messages";
import { Configschema } from "../nodecg/generated/configschema";

export type NodeCG = CreateNodecgInstance<
  packageJson.name,
  Configschema,
  ReplicantMap,
  MessageMap
>;
