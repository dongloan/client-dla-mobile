import React, { Component } from 'react'

class CartComponent extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default CartComponent;
