import React, { Component } from 'react';

class SamsungList extends Component {
    render() {
        return (
            <div className="product-page-main__right">
                {this.props.children}
            </div>
        )
    }
}

export default SamsungList;
