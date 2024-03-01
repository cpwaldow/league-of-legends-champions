import { useState, useEffect } from 'react';
import './App.css';
import { fetchChampionsList } from './services/fetchApi';
import { ChampionListType } from './types';
import { setStorage, getStorage } from './services/storage';

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
      {apiData && apiData.map((item) => <p key={item.name}>{item.name}</p>)}
    </>
  );
}

export default App;
