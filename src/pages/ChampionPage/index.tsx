import { useParams } from 'react-router-dom';
import { fetchChampionPage } from '../../services/fetchApi';
import { useEffect, useState } from 'react';
import { ChampionPageStateType } from '../../types';

const ChampionPage = () => {
  const [champion, setChampion] = useState<ChampionPageStateType>();
  const { id } = useParams();
  const idString: string = id ?? '';

  useEffect(() => {
    const handleFetch = async () => {
      const data = await fetchChampionPage(idString);
      setChampion(data);
    };
    handleFetch();
  }, []);

  if (!champion) return <p>Carregando...</p>;

  console.log(champion.data[idString]);
  return (
    <section>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${idString}_0.jpg`}
        alt=''
      />
    </section>
  );
};

export default ChampionPage;
