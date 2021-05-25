import './Footer.css';
import { Link } from 'react-router-dom';
import logoSbbs from '../../images/logoSBSS.svg';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__wrapper">
            <Link className="logo logo_place_footer" href="https://www.nastavniki.org/o-nas/ob-organizaczii/" target="_blank" rel="noopener">
                <img className="logo__img" src={logoSbbs} alt="Логотип Старшие Братья Старшие Сестры" />
            </Link>
            <Link className="footer__money" href="https://www.nastavniki.org/campaign/pomoch-dengami/" target="_blank" rel="noopener">Помочь деньгами</Link>
            <div className="footer__navigation">
            <nav className="footer__menu">
                <ul className="footer__list footer__list_type_nav">
                    <li className="footer__list-item">
                      <Link href="./pages-html/about.html" className="footer__list-link">О проекте</Link>
                    </li>
                    <li className="footer__list-item">
                      <Link to="/calendar" className="footer__list-link calender-open">Календарь</Link>
                    </li>
                    <li className="footer__list-item">
                      <Link href="./pages-html/where_to_go.html" className="footer__list-link">Куда пойти</Link>
                    </li>
                    <li className="footer__list-item">
                      <Link href="./pages-html/questions.html" className="footer__list-link">Вопросы</Link>
                    </li>
                    <li className="footer__list-item">
                      <Link href="./pages-html/read_watch.html" className="footer__list-link">Читать и смотреть</Link>
                    </li>
                    <li className="footer__list-item">
                      <Link href="./pages-html/rights.html" className="footer__list-link">Права детей</Link>
                    </li>
                    <li className="footer__list-item">
                      <Link href="./pages-html/stories.html" className="footer__list-link">Истории</Link>
                    </li>
                </ul>
                </nav>
                <nav className="footer__menu">
                    <ul className="footer__list footer__list_type_social">
                        <li className="footer__list-item">
                          <Link href="#" className="footer__list-link" target="_blank" rel="noopener">facebook</Link>
                        </li>
                        <li className="footer__list-item">
                          <Link href="#" className="footer__list-link" target="_blank" rel="noopener">vkontakte</Link>
                        </li>
                        <li className="footer__list-item">
                          <Link href="#" className="footer__list-link" target="_blank" rel="noopener">instagram</Link>
                        </li>
                        <li className="footer__list-item">
                          <Link href="#" className="footer__list-link" target="_blank" rel="noopener">youtube</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer__about">
                <p className="footer__copyright">&#169; Старшие Братья Старшие Сестры</p>
                <div className="footer__develop">
                    <p className="footer__develop-text">Разработка 	&mdash; студенты
                      <Link className="footer__develop-accent" href="https://praktikum.yandex.ru/" target="_blank" rel="noopener">Яндекс.Практикум</Link>
                    </p>
                    <p className="footer__develop-text">Концепия и дизайн &mdash;
                      <Link className="footer__develop-accent" href="https://krkr.design/" target="_blank" rel="noopener">krkr.design</Link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
