import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/common.scss'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
           <Switch>
               <Route path='/appMain' component={}/>
           </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
