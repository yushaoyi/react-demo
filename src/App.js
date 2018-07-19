import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/fonts/iconfont.css';
import './styles/common.scss';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AppMain from './layouts/appMain';
import Auth from './routes/auth/auth';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
           <Switch>
               <Route path="/appMain" component={AppMain}/>
               <Route path="/auth" component={Auth}/>
               <Route exact path="/" render = {() => (
                   <Redirect to="/appMain"/>
               )}/>
           </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
