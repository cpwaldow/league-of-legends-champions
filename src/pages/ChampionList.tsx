import { useState, useEffect } from 'react';
import { fetchChampionsList } from '../services/fetchApi';
import { ChampionListType } from '../types';
import { setStorage, getStorage } from '../services/storage';
import ChampionInfo from '../components/ChampionInfo';
import { Link } from 'react-router-dom';

const ChampionList = () => {
  const [apiData, setApiData] = useState<ChampionListType[]>();

  useEffect(() => {
    const handleFetch = async () => {
      if (localStorage.apiResult) {
        setApiData(getStorage());
        return;
      }
      const data = await fetchChampionsList();
      const handleData: ChampionListType[] = Object.values(data.data);

      setApiData(handleData);
      setStorage(handleData);
    };
    handleFetch();
  }, []);
  return (
    <>
      <h1 className='app__title'>Welcome to Summoners Rift</h1>
      <section className='app__container'>
        {apiData &&
          apiData.map((item) => (
            <Link to={`/champion-list/${item.id}`} key={item.name}>
              <ChampionInfo info={item} />
            </Link>
          ))}
      </section>
    </>
  );
};

export default ChampionList;
