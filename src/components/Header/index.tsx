import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className='header__container'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/champion-list'>Campeões</NavLink>
      </nav>
    </header>
  );
};

export default Header;
