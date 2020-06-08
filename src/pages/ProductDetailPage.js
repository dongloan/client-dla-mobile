import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetailItem from '../components/ProductDetailItem';
import ProductDetailList from '../components/ProductDetailList';

class ProductDetailPage extends Component {
    render() {
        var { products } = this.props;
        return (
            <section>
                <ProductDetailList>
                    {this.showProductInfo(products)}
                </ProductDetailList>
            </section>
        )
    }

    showProductInfo = (products) => {
        var { match } = this.props;
        var url = match;
        var result = null;
        result = products.map((productInfo, index) => {
            if (productInfo.id === match.params.id) {
                return (
                    <ProductDetailItem 
                        key={index}
                        productInfo={productInfo}
                        url={url}
                    />
                )
            }
            else {
                return null;
            }
        })
        return result;
    }
}



const mapStateToProps = state => {
    return {
        products : state.products.productList
    }
}

export default connect(mapStateToProps, null)(ProductDetailPage);
