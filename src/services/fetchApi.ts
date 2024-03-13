export const fetchChampionsList = async () => {
  const API_URL =
    'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json';
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

export const fetchChampionPage = async (championId: string) => {
  const URL = `https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion/${championId}.json`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
