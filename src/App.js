import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProtectedRoute from './Components/ProtectedRoute';
import Lk from './Components/Lk/Lk';
import { AppContext } from './contexts/AppContext';

function App() {
  /*eslint-disable */
  const history = useHistory();
  const [isLoadingUser, setIsLoadingUser] = useState(true); // Стейт прелоадер загрузки информации пользователя
  const [loggedIn, setLoggedIn] = useState(true); // Стейт-переменная статус пользователя, вход в систему
  /*eslint-disable */

  return (
    <AppContext.Provider value={{ loggedIn }}>
      <Header />
      <Switch>
        <ProtectedRoute exact path='/lk' component={Lk} isLoadingUser={isLoadingUser}/>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </AppContext.Provider>
  );
}

export default App;
