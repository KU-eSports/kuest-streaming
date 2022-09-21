import {
  CreateNodecgInstance,
  CreateNodecgConstructor,
} from "ts-nodecg/browser";

import packageJson from "../../package.json";

import { Configschema } from "../nodecg/generated/configschema";
import { ReplicantMap } from "../nodecg/replicants";
import { MessageMap } from "../nodecg/messages";

declare global {
  const nodecg: CreateNodecgInstance<
    packageJson.name,
    Configschema,
    ReplicantMap,
    MessageMap
  >;
  const NodeCG: CreateNodecgConstructor<
    packageJson.name,
    Configschema,
    ReplicantMap,
    MessageMap
  >;
}
