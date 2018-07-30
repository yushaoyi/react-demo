import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import CourseList from '../routes/home/js/courseList'
import CourseDetail from '../routes/home/js/courseDetail';
import PersonCenter from '../routes/personCenter/personCenter';
import MyCourseList from '../routes/personCenter/course/js/myCourseList';
import MyCourseDetail from '../routes/personCenter/course/js/myCourseDetail';
import MyOrder from '../routes/personCenter/order/js/order';
import PaySettlement from '../routes/pay/js/paySettlement';
import PayAddress from '../routes/pay/js/payAddress';
// import classNames from 'classnames';
import { GlobalStoreContext } from '../App'

class AppMain extends Component {

    state = {
       userInfo: ''
    }

    handleAppControlBtn = (event, context) => {
        let useInfo = context.userInfo || sessionStorage.getItem('userInfo')
        // todo 先判断是否登录
        if (useInfo) {
            this.props.history.push('/auth/login')
        } else {
            this.props.history.push('/auth/toLogin')
        }
    }

    render () {
        // const inputCls = classNames({
        //     'input-wrapper': true,
        //     'fx-row': true
        // })
        const { match } = this.props
        const parentUrl = match.url
        return (
            <GlobalStoreContext.Consumer>
                {
                    context => (
                        <div className="main">
                            <div className="app-control">
                                <button type="button"
                                        className={ "app-control-btn " + (context.userInfo ? "active" : "") }
                                        onClick={(e) => this.handleAppControlBtn(e, context)}
                                ><i className="iconfont icon-home"></i></button>
                            </div>
                            <section>
                                <Route exact path={`${parentUrl}`} render = {() => (
                                    <Redirect to={`${parentUrl}/courseList`}/>
                                )}/>
                                <Route path={`${parentUrl}/courseList`} component={CourseList}/>
                                <Route path={`${parentUrl}/courseDetail/:courseId`} component={CourseDetail}/>
                                <Route path={`${parentUrl}/personCenter`} component={PersonCenter}/>
                                <Route path={`${parentUrl}/myCourse`} component={MyCourseList}/>
                                <Route path={`${parentUrl}/myCourseDetail/:courseId`} component={MyCourseDetail}/>
                                <Route path={`${parentUrl}/myOrder`} component={MyOrder}/>
                                <Route path={`${parentUrl}/paySettlement/:productId`} component={PaySettlement}/>
                                <Route path={`${parentUrl}/payAddress`} component={PayAddress}/>
                            </section>
                        </div>
                    )
                }
            </GlobalStoreContext.Consumer>
        )
    }
}

export default AppMain