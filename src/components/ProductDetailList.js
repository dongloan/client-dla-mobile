import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductDetailList extends Component {
    render() {
        return (
            <div className="product-detail-page-main">
                <Link to="product-list">
                    <div className="back-product-detail">
                        <p>BACK</p>
                    </div>
                </Link>
                <h1>Chi tiết Sản Phẩm</h1>
                <div className="divider-product-detail color no-margin-bottom"></div>
                {this.props.children}
            </div>
        )
    }
}

export default ProductDetailList;