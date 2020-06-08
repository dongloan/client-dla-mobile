import React, { Component } from 'react';
import ProductSearchResult from './../components/ProductSearchResult';
import {connect} from 'react-redux';
import ProductSearchItem  from './../components/ProductSearchItem';
import {actGetProductRequest} from './../actions/index';
import {Link} from 'react-router-dom';
// import NotFoundPage from './NotFoundPage';

class ProductSearchPage extends Component {
    render() {
        var {products, keyword} = this.props;
        // var {match} = this.props;
        // console.log(match);
        return (
            <div className="product-page-main container-fuild">
                <div className="product-page-main__left">
                    <div className="product-page-main__left__sub">
                        <h4>By Categories</h4>
                        <div className="product-page-main__left__sub__detail">
                            <ul className="product-page-main__left__sub__detail__ul">
                                <Link to='/product-list' href=" #" ><li>all items</li></Link>
                                <Link to='/product-group-iphone' href=" #" ><li>iphone</li></Link>
                                <Link to='/product-group-samsung' href=" #" ><li>samsung</li></Link>
                                <Link to='/product-group-blackBerry' href=" #" ><li>black berry</li></Link>
                                <Link to='/product-group-oppo' href=" #" ><li>oppo</li></Link>
                                <Link to='/product-group-xiaomi' href=" #" ><li>xiaomi</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="product-page-main__left__sub item">
                        <h5>Featured Item</h5>
                        <div className="product-page-main__left__sub__background">
                            <img
                                src="https://assets.website-files.com/5cfd9ec0982a743102f284b0/5e3c2f5d5dad361078fec9a5_LAptop22.png" alt="" />
                            <h2>Apple Watch 4</h2>
                            <h3>$ 750.00 USD</h3>
                            <a href=" #" className="background-a">details</a>
                        </div>
                    </div>
                    <div className="product-page-main__left__sub subscribe">
                        <div className="product-page-main__left__sub__3">
                            <h5>Subscribe</h5>
                            <input placeholder="Please Enter Your Address" />
                            <br />
                            <a href=" #" className="background-a2">subscribe</a>
                        </div>
                    </div>
                </div>
                
                    <ProductSearchResult>
                        {this.showProductSearchList(products, keyword)}
                    </ProductSearchResult>

            </div>
        )
    }

    showProductSearchList = (products, keyword) => {
        var result = null;
        var {onGetProduct} = this.props;
        if(products.length > 0){
            result = products.map((productSearchItem, index) => {
                if(productSearchItem.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                    return (
                        <ProductSearchItem 
                            key={index}
                            productSearchItem={productSearchItem}
                            onGetProduct={onGetProduct}
                        />
                    )
                }else {
                    return (
                        null
                    )
                }
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products : state.products.productList,
        keyword : state.searchProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProduct: (product, quantity) => {
        dispatch(actGetProductRequest(product.id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearchPage);