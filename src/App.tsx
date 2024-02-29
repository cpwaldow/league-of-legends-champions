import { useState, useEffect } from 'react';
import './App.css';
import { fetchChampionsList } from './services/fetchApi';
import { ChampionListType } from './types';

function App() {
  const [apiData, setApiData] = useState<ChampionListType[]>();

  useEffect(() => {
    const handleFetch = async () => {
      const data = await fetchChampionsList();
      const handleData: ChampionListType[] = Object.values(data.data);
      setApiData(handleData);
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
