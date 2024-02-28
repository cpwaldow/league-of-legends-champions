import { ChampionListType } from '../types';

export const fetchChampionsList = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json',
  );
  const data = await response.json();

  const handleData = Object.values(data.data).map((value: unknown) => {
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
  return handleData;
};
