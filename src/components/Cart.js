import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Cart;
