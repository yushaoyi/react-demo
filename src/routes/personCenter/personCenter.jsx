import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PersonCenter extends Component {
    render () {
        return (
            <div className="person-center-page">
                <div className="person-center-nav">
                    <ul>
                        <li>
                            <NavLink
                                activeStyle={{ color: 'green', fontWeight: 'bold' }}
                                to='/appMain/myCourseList'>我的课程</NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeStyle={{ color: 'green', fontWeight: 'bold' }}
                                to='/appMain/order'>我的订单</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PersonCenter;