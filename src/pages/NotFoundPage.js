import React, { Component } from 'react'

export default class NotFoundPage extends Component {
    render() {
        var {location} = this.props;
        console.log(location);
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        )
    }
}
