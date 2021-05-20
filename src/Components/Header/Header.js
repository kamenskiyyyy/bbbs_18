import './header.css';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

function Header({ isNavOpened, onClickNav }) {
  function handleClick() {
    onClickNav(!isNavOpened);
  }

  /*eslint-disable */
  return (
    <header className="header">
      <div className="header__wrapper">
        <NavLink className="header__logo" to="/" />
        <button
          type="button"
          className={`header__burger-btn ${isNavOpened && 'header__burger-btn-close'}`}
          onClick={handleClick}
        />
        <NavBar onClickNav={onClickNav} isNavOpened={isNavOpened} />
      </div>
    </header>
  );
  /*eslint-disable */
}

export default Header;
