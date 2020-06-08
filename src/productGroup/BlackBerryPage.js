import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import BlackBerryList from './BlackBerryList';
import BlackBerryItem from './BlackBerryItem';
import { actGetProductRequest } from './../actions/index';

class ProductGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            black : "black"
        }
    }
    render() {
        var {products} = this.props;
        return (
            <section>
                <div className="product-page-main-super container-fuild">
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
                                        <Link to='/product-group-realme' href=" #" ><li>realme</li></Link>
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
                        <BlackBerryList>
                            {this.showIphone(products, this.state.black)}
                        </BlackBerryList>
                    </div>
                </div>
            </section>
        )
    }

    showIphone = (products, label) => {
        var result = null;
        var {onGetProduct} = this.props;
        result = products.map((productKing, index) => {
            if(productKing.name.toLowerCase().indexOf(label) !== -1) {
                return (
                    <BlackBerryItem 
                        key={index}
                        productKing={productKing}
                        onGetProduct={onGetProduct}
                    />
                )
            }else {
                return null;
            }
        })
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.productList,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProduct: (product, quantity) => {
            dispatch(actGetProductRequest(product.id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGroup);