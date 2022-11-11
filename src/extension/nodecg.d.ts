import type { CreateNodecgInstance } from "ts-nodecg/server";

import packageJson from "../../package.json";

import type { ReplicantMap } from "../nodecg/replicants";
import type { MessageMap } from "../nodecg/messages";
import type { Configschema } from "../nodecg/generated/configschema";

export type NodeCG = CreateNodecgInstance<
  packageJson.name,
  Configschema,
  ReplicantMap,
  MessageMap
>;
