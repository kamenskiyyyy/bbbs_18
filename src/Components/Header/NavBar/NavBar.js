import { Link, NavLink } from 'react-router-dom';

function NavBar({ isNavOpened, openModal }) {
  return (
    <>
      <nav className="header__menu">
        <ul className="header__list">
          <li className="header__list-item calender-open">
            <NavLink to="/calendar" className="header__list-link" activeClassName="header__active-link">
              Календарь
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/where_to_go" className="header__list-link" activeClassName="header__active-link">
              Куда пойти
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/questions" className="header__list-link" activeClassName="header__active-link">
              Вопросы
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/read_watch" className="header__list-link" activeClassName="header__active-link">
              Читать и смотреть
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/rights" className="header__list-link" activeClassName="header__active-link">
              Права детей
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/stories" className="header__list-link" activeClassName="header__active-link">
              Истории
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="header__action">
        <NavLink className="header__button-search" to="/search" />
        <button
          aria-label="Личный кабинет"
          type="button"
          onClick={openModal}
          className="header__button-login header__button-login_unauthorized"
        />
      </nav>

      <div className={`header__burger ${isNavOpened && 'header__burger_open'}`}>
        <div className="header__burger-wrapper">
          <nav className="header__menu-burger">
            <ul className="header__burger-list">
              <li className="header__burger-item">
                <NavLink to="/about" className="header__burger-link">
                  О проекте
                </NavLink>
              </li>
              <li className="header__burger-item">
                <NavLink to="/calendar" className="header__burger-link calender-open">
                  Календарь
                </NavLink>
              </li>
              <li className="header__burger-item">
                <NavLink to="/where_to_go" className="header__burger-link">
                  Куда пойти
                </NavLink>
              </li>
              <li className="header__burger-item">
                <NavLink to="/questions" className="header__burger-link">
                  Вопросы
                </NavLink>
              </li>
              <li className="header__burger-item">
                <NavLink to="/read_watch" className="header__burger-link">
                  Читать и смотреть
                </NavLink>
              </li>
              <li className="header__burger-item">
                <NavLink to="/questions" className="header__burger-link">
                  Права детей
                </NavLink>
              </li>
              <li className="header__burger-item">
                <NavLink to="/stories" className="header__burger-link">
                  Истории
                </NavLink>
              </li>
            </ul>
          </nav>
          <nav className="header__menu-burger">
            <ul className="header__burger-list">
              <li className="header__burger-item">
                <Link
                  to="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
                  target="_blank"
                  className="header__burger-link"
                >
                  facebook
                </Link>
              </li>
              <li className="header__burger-item">
                <Link href="https://vk.com/big.brothers.big.sisters" target="_blank" className="header__burger-link">
                  vkontakte
                </Link>
              </li>
              <li className="header__burger-item">
                <Link href="https://www.instagram.com/nastavniki_org/" target="_blank" className="header__burger-link">
                  instagram
                </Link>
              </li>
              <li className="header__burger-item">
                <Link href="https://www.youtube.com/user/Nastavniki" target="_blank" className="header__burger-link">
                  youtube
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
