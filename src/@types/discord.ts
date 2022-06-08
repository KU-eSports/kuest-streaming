import { Snowflake } from "discord.js";

export type VoiceTrack = {
  state: "start" | "end";
  userId: Snowflake;
}
