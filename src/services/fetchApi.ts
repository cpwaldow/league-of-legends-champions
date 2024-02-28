import { ChampionListType } from '../types';

export const fetchChampionsList = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json',
  );
  const data = await response.json();
  return data.data.map((champion: ChampionListType) => ({
    championName: champion.name,
    championTitle: champion.title,
    championBlurb: champion.blurb,
    championTags: champion.tags,
    championImg: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`,
  }));
};
