export type AgentDto = {
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
};

export type MapDto = {
  uuid: string;
  displayName: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: single;
  yMultiplier: single;
  xScalarToAdd: single;
  yScalarToAdd: single;
  callouts: {
    regionName: string;
    superRegionName: string;
    location: {
      x: single;
      y: single;
    };
  }[];
};

type int32 = number;
type single = number;
