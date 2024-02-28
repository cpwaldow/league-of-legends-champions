import { ChampionListType } from '../types';

export const handleChampionsList = (obj: Object) =>
  Object.values(obj).map((value: unknown) => {
    const { name, blurb, id, partype, title } = value as ChampionListType;
    return {
      name,
      blurb,
      id,
      partype,
      title,
      img: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`,
    };
  });
