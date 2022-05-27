export type LockData = {
  name: string;
  pid: string;
  port: string;
  password: string;
  protocol: string;
}

export type Client = {
  platform: string;
  version: string;
}


export type MatchDto = {
  matchInfo: MatchInfoDto;
  players: PlayerDto[];
  coaches: CoachDto[];
  teams: TeamDto[];
  roundResults: RoundResultDto[];
}

type MatchInfoDto = {
  matchId: string;
  mapId: string;
  gameLengthMillis: int;
  gameStartMillis: long;
  provisioningFlowID: string;	
  isCompleted: boolean;
  customGameName: string;
  queueID: string;
  gameMode: string;
  isRanked: boolean;
  seasonId: string;
}

type PlayerDto = {
  subject: string;
  gameName: string;
  tagLine: string;
  teamId: string;
  partyId: string;
  characterId: string;
  stats: PlayerStatsDto;
  competitiveTier: int;
  playerCard: string;
  playerTitle: string;
}

type PlayerStatsDto = {
  score: int;
  roundsPlayed: int;
  kills: int;
  deaths: int;
  assists: int;
  playtimeMillis: int;
  abilityCasts: AbilityCastsDto;
}

type AbilityCastsDto = {
  grenadeCasts: int;
  ability1Casts: int;
  ability2Casts: int;
  ultimateCasts: int;
}

type CoachDto = {
  puuid: string;
  teamId: string;
}

type TeamDto = {
  teamId: string;
  won: boolean;
  roundsPlayed: int;
  roundsWon: int;
  numPoints: int;
}

type RoundResultDto = {
  roundNum: int;
  roundResult: string;
  roundCeremony: string;
  winningTeam: string;
  bombPlanter?: string;
  bombDefuser?: string;
  plantRoundTime: int;
  plantPlayerLocations: PlayerLocationsDto[] | null;
  plantLocation: LocationDto;
  plantSite: string;
  defuseRoundTime: int;
  defusePlayerLocations: PlayerLocationsDto[] | null;
  defuseLocation: LocationDto;
  playerStats: PlayerRoundStatsDto[];
  roundResultCode: string;
}

type PlayerLocationsDto = {
  subject: string;
  viewRadians: float;
  location: LocationDto;
}

type LocationDto = {
  x: int;
  y: int;
}

type PlayerRoundStatsDto = {
  subject: string;
  kills: KillDto[];
  damage: DamageDto[];
  score: int;
  economy: EconomyDto;
  ability: AbilityDto;
}

type KillDto = {
  gameTime: int;
  roundTime: int;
  killer: string;
  victim: string;
  victimLocation: LocationDto;
  assistants: string[];
  playerLocations: PlayerLocationsDto[];
  finishingDamage: FinishingDamageDto;
}

type FinishingDamageDto = {
  damageType: string;
  damageItem: string;
  isSecondaryFireMode: boolean;
}

type DamageDto = {
  receiver: string;
  damage: int;
  legshots: int;
  bodyshots: int;
  headshots: int;
}

type EconomyDto = {
  loadoutValue: int;
  weapon: string;
  armor: string;
  remaining: int;
  spent: int;
}

type AbilityDto = {
  grenadeEffects: string | null;
  ability1Effects: string | null;
  ability2Effects: string | null;
  ultimateEffects: string | null;
}

type int = number;
type long = number;
type float = number;


export type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[] | null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string | null;
  backgroundGradientColors: string[] | null;
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
  abilities: {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
  }[];
  voiceLine: {
    minDuration: single;
    maxDuration: single;
    mediaList: {
      id: int32;
      wwise: string;
      wave: string;
    }[];
  };
}

type int32 = number;
type single = number;
