import { handleChampionsList } from '../utils/handleChampionsList';

export const fetchChampionsList = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json',
  );
  const data = await response.json();

  const handleData = handleChampionsList(data.data);
  return handleData;
};
