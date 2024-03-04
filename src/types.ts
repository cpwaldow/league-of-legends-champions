export type ChampionListType = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
};

export type ChampionPageStateType = {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: {
      allytips: string[];
      blurb: string;
      enemytips: string[];
      id: string;
      image: {
        [key: string]: string | number;
      };
      info: {
        [key: string]: number;
      };
      key: string;
      lore: string;
      name: string;
      partytype: string;
      passive: {
        [key: string]:
          | string
          | {
              [key: string]: string | number;
            };
      };
      recommended: any[];
      skins: {
        [key: string]: string | number;
      }[];
      spells: any[];
      stats: {
        [key: string]: number;
      };
      tags: string[];
      title: string;
    };
  };
};
