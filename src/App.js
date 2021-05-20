import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Main />
      <Footer />
    </>
  );
}

export default App;
