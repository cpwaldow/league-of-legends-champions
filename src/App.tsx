import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChampionList from './pages/ChampionList';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/champion-list' element={<ChampionList />} />
          <Route
            path='/champion-list/:id'
            element={
              <p style={{ textAlign: 'center' }}>página em construção</p>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
