import "source-map-support/register";
import { NodeCG } from "./nodecg";

import discord from "./discord";

export = (nodecg: NodeCG) => {
	discord(nodecg);
};
