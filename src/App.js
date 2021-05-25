import { useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
  // Redirect,
} from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProtectedRoute from './Components/ProtectedRoute';
import Lk from './Components/Lk/Lk';
import { AppContext } from './contexts/AppContext';
import Search from './Components/Header/Search/Search';
import Popup from './Components/Popup/PopupAuth';
import Calendar from './Components/Calendar/Calendar';

function App() {
  /*eslint-disable */
  const history = useHistory();
  const [isLoadingUser, setIsLoadingUser] = useState(true); // Стейт прелоадер загрузки информации пользователя
  const [loggedIn, setLoggedIn] = useState(false); // Стейт-переменная статус пользователя, вход в систему
  const [isNavOpened, setIsNavOpened] = useState(false); // Стейт мобильная навигация открыта
  const [modalIsOpen, setIsOpen] = useState(false); // Стейт открытия модального окна
  /*eslint-disable */

  function handleNavClick() {
    setIsNavOpened(!isNavOpened);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <body className="root">
      <AppContext.Provider value={{ loggedIn }}>
        <Header isNavOpened={isNavOpened} onClickNav={handleNavClick} openModal={openModal} />
        <Switch>
          <ProtectedRoute exact path="/lk" component={Lk} isLoadingUser={isLoadingUser} />
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          {/* <Route path="/">
            <Redirect to="/" />
          </Route> */}
        </Switch>
        <Switch>
        <Route exact path="/calendar">
            <Calendar />
          </Route>
        </Switch>
        <Footer />

        <Popup
          isOpen={modalIsOpen}
          onClose={closeModal}
        />
      </AppContext.Provider>
    </body>
  );
}

export default App;
