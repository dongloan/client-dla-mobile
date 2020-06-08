import React, { Component } from 'react'

class ProductGroupList extends Component {
    render() {
        return (
            <div className="product-page-main__right">
                {this.props.children}
            </div>
        )
    }
}

export default ProductGroupList;
