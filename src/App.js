import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/fonts/iconfont.css';
import './styles/common.scss';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AppMain from './layouts/appMain';
import Auth from './routes/auth/auth';


const initialState = {
    userInfo: '',
    token: ''
}


export const GlobalStoreContext = React.createContext({
    ...initialState
})

class GlobalStoreContextProvider extends React.Component {
    state = {
        ...initialState
    }

    handleContextChange = action => {
        switch (action.type) {
            case "SET_USER_INFO":
                console.log(action)
                return this.setState({
                    userInfo: action.userInfo,
                    token: action.userInfo ? action.userInfo.token : ''
                });
            default:
                return;
        }
    }

    render () {
        return (
            <GlobalStoreContext.Provider
                value={{
                    dispatch: this.handleContextChange,
                    userInfo: this.state.userInfo,
                    token: this.state.token
                }}
            >
                {this.props.children}
            </GlobalStoreContext.Provider>
        )
    }
}


class App extends Component {
  render() {
    return (
        <GlobalStoreContextProvider>
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
        </GlobalStoreContextProvider>
    );
  }
}

export default App;
