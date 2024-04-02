import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChampionList from './pages/ChampionList';
import Header from './components/Header';
import Home from './pages/Home';
import ChampionPage from './pages/ChampionPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/champion-list' element={<ChampionList />} />
          <Route path='/champion-list/:id' element={<ChampionPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
