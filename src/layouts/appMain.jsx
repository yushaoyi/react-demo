import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import CourseList from '../routes/home/js/courseList'
import CourseDetail from '../routes/home/js/courseDetail'
// import classNames from 'classnames';

class AppMain extends Component {

    state = {
       userInfo: ''
    }

    handleAppControlBtnClick = (event) => {
        // todo 先判断是否登录
        this.props.history.push('/auth/login')
        // 'auth/toLogin'
    }

    render () {
        // const inputCls = classNames({
        //     'input-wrapper': true,
        //     'fx-row': true
        // })
        const { match } = this.props
        const parentUrl = match.url
        return (
            <div className="main">
                <div className="app-control">
                    <button type="button"
                        className={ "app-control-btn " + (this.state.userInfo ? "active" : "") }
                        onClick={this.handleAppControlBtnClick.bind(this)}
                    ><i className="iconfont icon-home"></i></button>
                </div>
                <section>
                    <Route exact path={`${parentUrl}`} render = {() => (
                        <Redirect to={`${parentUrl}/courseList`}/>
                        )}/>
                    <Route path={`${parentUrl}/courseList`} component={CourseList}/>
                    <Route path={`${parentUrl}/courseDetail/:courseId`} component={CourseDetail}/>
                </section>
            </div>
        )
    }
}

export default AppMain