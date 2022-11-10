type Speaker = {
  mute: boolean;
  nick: string;
  pan: {
    left: number;
    right: number;
  };
  speaking?: boolean;
  user: {
    avatar: string | null;
    avatar_decoration: null;
    bot: boolean;
    discriminator: string;
    flags: number;
    id: string;
    premium_type?: number;
    username: string;
  };
  voice_state: {
    deaf: boolean;
    mute: boolean;
    self_deaf: boolean;
    self_mute: boolean;
    suppress: boolean;
  };
  volume: number;
};
