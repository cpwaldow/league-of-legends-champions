import { useParams } from 'react-router-dom';
import { fetchChampionPage } from '../../services/fetchApi';
import { useEffect, useState } from 'react';
import { ChampionPageStateType } from '../../types';
import './championPage.css';

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
    <section className='champion-page__container'>
      <div className='champion-page__main-info'>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${idString}_0.jpg`}
          alt={champion.data[idString].name}
          className='champion-page__image'
        />
        <div className='champion-page__main-info__text'>
          <h1>{champion.data[idString].name}</h1>
          <p>{champion.data[idString].lore}</p>
        </div>
      </div>

      <section className='champion-page__tips-list'>
        {champion.data[idString].allytips.length > 0 && (
          <div className='champion-page--background--green'>
            <h2>{champion.data[idString].name} aliado</h2>
            <ul>
              {champion.data[idString].allytips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {champion.data[idString].enemytips.length > 0 && (
          <div className='champion-page--background--red'>
            <h2>{champion.data[idString].name} inimigo</h2>
            <ul>
              {champion.data[idString].enemytips.map((item) => (
                <li key={item} className=''>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </section>
  );
};

export default ChampionPage;
