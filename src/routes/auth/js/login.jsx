import React, { Component } from 'react';
import { GlobalStoreContext } from '../../../App'

class Login extends Component {

    state = {
        phone: '',
        password: ''
    }

    constructor () {
        super()
    }

    handleLoginBtn = (event, dispatch) => {
        console.log('login')
        setTimeout(_ => {
            dispatch({
                type: 'SET_USER_INFO',
                userInfo: {
                    userName: 'aa',
                    token: 'test'
                }
            })
            this.props.history.push('/appMain/personCenter')
        }, 1000)
    }

    render () {
        return (
            <GlobalStoreContext.Consumer>
                {
                    context => (
                        <div className="login-page">
                            <button className="login-submit-btn"
                                onClick={(e) => this.handleLoginBtn(e, context.dispatch) }
                            >
                               登录
                            </button>
                        </div>
                    )
                }
            </GlobalStoreContext.Consumer>
        )
    }
}

export default Login
