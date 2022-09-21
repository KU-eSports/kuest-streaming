import type { DiscordGatewayAdapterCreator } from "@discordjs/voice";
import { joinVoiceChannel } from "@discordjs/voice";

import { Client, Intents, Snowflake } from "discord.js";
import { NodeCG } from "./nodecg";
const options = {
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
};
const client = new Client(options);

export default async (nodecg: NodeCG) => {
  const discordRep = nodecg.Replicant("discordVoice");

  const config = nodecg.bundleConfig.discord;

  client.once("ready", (client) => {
    if (!config?.guild || !config?.channel) return;
    const guild = client.guilds.cache.get(config?.guild);
    if (!guild) return;
    const voiceChannel = guild.channels.cache.get(config?.channel);
    if (!voiceChannel) return;
    const connection = joinVoiceChannel({
      adapterCreator: guild.voiceAdapterCreator as DiscordGatewayAdapterCreator,
      channelId: voiceChannel.id,
      guildId: guild.id,
      selfDeaf: false,
      selfMute: true,
    });
    const sendVoiceState = (isSpeak: boolean, userId: Snowflake) => {
      discordRep.value = {
        isSpeak,
        userId,
      };
    };
    connection.receiver.speaking.on("start", (userId) => {
      sendVoiceState(true, userId);
    });
    connection.receiver.speaking.on("end", (userId) => {
      sendVoiceState(false, userId);
    });
  });

  if (!config?.token) return;
  client.login(config.token);
};
