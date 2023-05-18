import type { NodeCG } from "./nodecg";

import { Client } from "discord-streamkit-rpc";

export default async (nodecg: NodeCG) => {
	const speakingRep = nodecg.Replicant("speaking", { defaultValue: [] });

	const config = nodecg.bundleConfig;

	const channel_id = config.discord?.channel_id;
	if (!channel_id) return;

	const client = new Client();

	client.on("ready", async () => {
		const channel = await client.getChannel(channel_id);
		speakingRep.value = channel.voice_states ?? [];
		client.subscribe("VOICE_STATE_CREATE", { channel_id });
		client.subscribe("VOICE_STATE_DELETE", { channel_id });
		client.subscribe("VOICE_STATE_UPDATE", { channel_id });
		client.subscribe("SPEAKING_START", { channel_id });
		client.subscribe("SPEAKING_STOP", { channel_id });
	});

	client.on("VOICE_STATE_CREATE", (data) => {
		speakingRep.value = [
			{ speaking: false, ...data },
			...(speakingRep.value ?? []),
		];
	});
	client.on("VOICE_STATE_DELETE", (data) => {
		speakingRep.value = (speakingRep.value ?? []).filter(
			(d) => d.user.id !== data.user.id,
		);
	});
	client.on("VOICE_STATE_UPDATE", (data) => {
		let contains = false;
		speakingRep.value = (speakingRep.value ?? []).map((d) => {
			if (d.user.id === data.user.id) {
				contains = true;
				return Object.assign(d, data);
			} else {
				return d;
			}
		});
		if (!contains)
			speakingRep.value = [
				{ speaking: false, ...data },
				...(speakingRep.value ?? []),
			];
	});

	client.on("SPEAKING_START", (data) => {
		speakingRep.value = (speakingRep.value ?? []).map((d) => {
			if (d.user.id === data.user_id) {
				return {
					...d,
					speaking: true,
				};
			} else {
				return d;
			}
		});
	});
	client.on("SPEAKING_STOP", (data) => {
		speakingRep.value = (speakingRep.value ?? []).map((d) => {
			if (d.user.id === data.user_id) {
				return {
					...d,
					speaking: false,
				};
			} else {
				return d;
			}
		});
	});

	client.streamkit();
};
