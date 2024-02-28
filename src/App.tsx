import { useState, useEffect } from 'react';
import './App.css';
import { fetchChampionsList } from './services/fetchApi';
import { ChampionInfoType } from './types';

function App() {
  const [apiData, setApiData] = useState<ChampionInfoType[]>();
  useEffect(() => {
    const handleFetch = async () => {
      const apiResponse = await fetchChampionsList();
      setApiData(apiResponse);
    };
    handleFetch();
  }, []);
  console.log(apiData);

  return <p>ola</p>;
}

export default App;
