import './App.css';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects'
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app__container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/skills' exact component={Skills} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
