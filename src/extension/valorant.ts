import type { NodeCG } from "../../../../types/server";

import axios from "axios";
import path from "path";
import fs from "fs";
import https from "https";
import WS from "ws";

import { Client, LockData, MatchDto } from "../@types/valorant";

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

async function getLockfileData() {
  const lockfilePath = path.join(process.env["LOCALAPPDATA"] as string, 'Riot Games\\Riot Client\\Config\\lockfile');
  const contents = await fs.promises.readFile(lockfilePath, 'utf8');
  const [name, pid, port, password, protocol] = contents.split(':');
  const lockData: LockData = { name, pid, port, password, protocol };
  return lockData;
}

async function asyncTimeout(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

async function getSession(lockData: LockData) {
  const url = `https://127.0.0.1:${lockData.port}/chat/v1/session`;
  const auth = `riot:${lockData.password}`;
  const base64 = Buffer.from(auth).toString("base64");
  const Authorization = `Basic ${base64}`;
  const headers = {
    Authorization
  };
  const res = await instance.get(url, { headers });
  const data = res.data;
  return data;
}

async function getClient() {
  const url = "https://valorant-api.com/v1/version";
  const res = await axios.get(url);
  const platform = "ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9";
  const version = res.data.data.riotClientVersion;
  const client: Client = { platform, version }
  return client;
}

async function getToken(lockData: LockData) {
  const url = `https://127.0.0.1:${lockData.port}/entitlements/v1/token`;
  const auth = `riot:${lockData.password}`;
  const base64 = Buffer.from(auth).toString("base64");
  const Authorization = `Basic ${base64}`;
  const headers = {
    Authorization
  };
  const res = await instance.get(url, { headers });
  const data = res.data;
  const token = data.accessToken;
  const entitlement = data.token;
  return [token, entitlement];
}

async function getMatchDetails(lockData: LockData, client: Client, id: string) {
  const region = "ap";
  const [token, entitlement] = await getToken(lockData)
  const Authorization = `Bearer ${token}`;
  const headers = {
    "X-Riot-Entitlements-JWT": entitlement,
    Authorization,
    "X-Riot-ClientVersion": client.version,
    "X-Riot-ClientPlatform": client.platform
  };
  const url = `https://pd.${region}.a.pvp.net/match-details/v1/matches/${id}`;
  let res;
  try {
    res = await instance.get(url, { headers });
  }
  catch { }
  if (!res?.data) return;
  const data: MatchDto = res.data;
  return data;
}


export const valorant = async (nodecg: NodeCG) => {
  const valorantRep = nodecg.Replicant<MatchDto | undefined>("valorant");
  const loop = async () => {
    let lockData: LockData | null = null;
    let sessionData = null;
    do {
      try {
        lockData = await getLockfileData();
        sessionData = await getSession(lockData);
        if (sessionData.loaded === false) {
          await asyncTimeout(5000);
          sessionData = null;
        }
      }
      catch (e) {
        await asyncTimeout(60000);
      }
    } while (sessionData === null || lockData === null);
    const client = await getClient();
    const ws = new WS(`wss://riot:${lockData.password}@localhost:${lockData.port}`, {
      rejectUnauthorized: false
    });
    ws.on("open", () => {
      const name = "OnJsonApiEvent_riot-messaging-service_v1_message";
      ws.send(JSON.stringify([5, name]));
    });
    ws.on("message", async data => {
      if (!data?.toString()) return;
      const resource = JSON.parse(data?.toString())?.[2]?.data?.resource;
      const prefix = "ares-core-game/core-game/v1/matches/";
      if (resource.startsWith(prefix)) {
        const id = resource.replace(prefix, "");
        const result = await getMatchDetails(lockData as LockData, client, id);
        valorantRep.value = result;
      }
    });
    ws.on("close", async () => {
      loop();
    });
  };
  loop();
}
