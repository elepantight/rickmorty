import React from 'react';
import './styles/main.scss';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import Navigation from './components/Navigation/index';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Locations from './pages/Locations';
import LocationDetails from './pages/LocationDetails';

import IMG from './images/rick.svg';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/characters/:id" component={CharacterDetails}/>
        <Route path="/characters" component={Characters} />
        <Route path="/locations/:id" component={LocationDetails}/>
        <Route path="/locations" component={Locations} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="container home">
      <h2>Rick and Morty Router</h2>
      <div className="poster">
        <img alt="rickandmorty router" src={IMG} />
      </div>
    </div>
  )
}

export default App;