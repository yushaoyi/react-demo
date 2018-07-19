import React, { Component } from 'react';

export default class CourseDetail extends Component {


    constructor () {
        super()
        // this.props.history.push({
        //     pathname:"/inbox",
        //     query:{
        //         name:"inbox",
        //         myas:"哈哈"
        //     }
        // })
        console.log(this.props.match.params.id)
    }

    render () {
        return (
            <div>
                <p>course-detail page</p>
            </div>
        )
    }
}