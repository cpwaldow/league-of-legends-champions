import { useState, useEffect } from 'react';
import './App.css';
import { fetchChampionsList } from './services/fetchApi';
import { ChampionListType } from './types';
import { setStorage, getStorage } from './services/storage';
import ChampionInfo from './components/ChampionInfo';

function App() {
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
      <h1>Welcome to Summoners Rift</h1>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {apiData &&
          apiData.map((item) => <ChampionInfo key={item.name} info={item} />)}
      </section>
    </>
  );
}

export default App;
