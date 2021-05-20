import './Search.css';
import { Link } from 'react-router-dom';

function Search() {
  return (
    <div className="header__wrapper header__wrapper_search">
      <Link className="header__logo header__logo_search" to="#" />
      <Link className="header__button-search header__button-search_search" to="#" />
      <div className="header__search">
        <input className="header__input" name="question" id="search" type="text" placeholder="Введите вопрос" />
        <div className="search">
          <ul className="search__list">
            <li className="search__item">
              <h3 className="search__heading">Причины подростковой агрессии</h3>
              <Link className="search__link" href="#">
                статьи
              </Link>
            </li>
            <li className="search__item">
              <h3 className="search__heading">Агрессивное поведение детей-сирот</h3>
              <Link className="search__link" href="#">
                видео
              </Link>
            </li>
            <li className="search__item">
              <h3 className="search__heading">Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?</h3>
              <Link className="search__link" href="#">
                вопросы
              </Link>
            </li>
            <li className="search__item">
              <h3 className="search__heading">Как реагировать на агрессивное поведения ребенка</h3>
              <Link className="search__link" href="#">
                книги
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link href="#" className="header__button-login header__button-login_unauthorized" />
    </div>
  );
}

export default Search;
