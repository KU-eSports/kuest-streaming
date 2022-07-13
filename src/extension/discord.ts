import type { NodeCG } from "../../../../types/server";

import { joinVoiceChannel } from "@discordjs/voice";

import { Client, Intents, Snowflake } from "discord.js";
import { VoiceTrack } from "../@types/discord";
const options = {
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ]
};
const client = new Client(options);


export default async (nodecg: NodeCG) => {
  const discordRep = nodecg.Replicant("discord");

  const config = nodecg.bundleConfig.discord;

  client.once("ready", (client) => {
    const guild = client.guilds.cache.get(config.guild);
    if (!guild) return;
    const voiceChannel = guild.channels.cache.get(config.voiceTrack);
    if (!voiceChannel) return;
    const connection = joinVoiceChannel({
      guildId: guild.id,
      channelId: voiceChannel.id,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: true
    });
    const sendVoiceState = (state: "start" | "end", userId: Snowflake) => {
      const data: VoiceTrack = {
        state,
        userId
      };
      discordRep.value = data;
    }
    connection.receiver.speaking.on("start", userId => {
      sendVoiceState("start", userId);
    });
    connection.receiver.speaking.on("end", userId => {
      sendVoiceState("end", userId);
    });
    client.options.presence = {
      activities: [
        {
          name: config.stream.name,
          type: "STREAMING",
          url: config.stream.url
        }
      ]
    };
  });

  client.login(config.token);
};
