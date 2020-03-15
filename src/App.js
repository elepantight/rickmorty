import React , { Component } from 'react';

import Navigation from './components/nav';

import './scss/styles.scss';

export default class App extends Component {
  render() {
    return(
      
      <>
<Navigation />
<div className="container-fluid">
      {this.props.children}
    </div>
    </>
    )
  }
};