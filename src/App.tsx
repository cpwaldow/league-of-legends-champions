import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChampionList from './pages/ChampionList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/champion-list' element={<ChampionList />} />
        <Route
          path='/champion-list/:id'
          element={<p>página em construção</p>}
        />
      </Routes>
    </>
  );
}

export default App;
