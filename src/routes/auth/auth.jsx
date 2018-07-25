import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import Login from "./js/login";
import Register from './js/register';
import ToLogin from './js/toLogin';

class Auth extends Component {
    render () {
        const { match } = this.props
        const parentUrl = match.url
        return (
            <div className="auth-page">
                <section>
                    <Route exact path={`${parentUrl}`} render = {() => (
                        <Redirect to={`${parentUrl}/login`}/>
                    )}/>
                    <Route path={`${parentUrl}/login`} component={Login}/>
                    <Route path={`${parentUrl}/register`} component={Register}/>
                    <Route path={`${parentUrl}/toLogin`} component={ToLogin}/>
                </section>
            </div>
        )
    }
}

export default Auth