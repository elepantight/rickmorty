import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from './App';
import Homepage from './pages/Homepage';
import About from './pages/About';
import CardSpecific from './pages/card-specific';
import Contact from './pages/Contact';


ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/About" exact component={About} />
        <Route path="/card-specific/:id" exact component={CardSpecific}/>
        <Route path="/Contact" exact component={Contact} />      
        </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
