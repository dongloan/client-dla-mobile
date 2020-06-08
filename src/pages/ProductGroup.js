import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ProductGroupItem from './../components/ProductGroupItem';
import ProductGroupList from './../components/ProductGroupList';

class ProductGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            iphone : "iphone",
            samsung : "samsung",
            blackBerry : "black berry",
            oppo : "oppo",
            xiaomi : "xiaomi"
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
                                        <li><Link to='/product-list' href=" #">all items</Link></li>
                                        <li><Link to='/product-group' href=" #">iphone</Link></li>
                                        <li><Link to='/product-group' href=" #">samsung</Link></li>
                                        <li><Link to='/product-group' href=" #">black berry</Link></li>
                                        <li><Link to='/product-group' href=" #">oppo</Link></li>
                                        <li><Link to='/product-group' href=" #">xiaomi</Link></li>
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
                        <ProductGroupList>
                            {/* {this.showProductGroup(products, this.state)} */}
                        </ProductGroupList>
                    </div>
                </div>
            </section>
        )
    }
    // showProductGroup = (products, label) => {
    //     var result = null;
    //     result = products.map((productKing, index) => {
    //         if(productKing.name.toLowerCase().indexOf(label) !== -1) {
    //             return (
    //                 <ProductGroupItem 
    //                     key={index}
    //                     productKing={productKing}
    //                 />
    //             )
    //         }else {
    //             return null;
    //         }
    //     })
    //     return result;
    // }
}

const mapStateToProps = state => {
    return {
        products: state.products.productList,
    }
}

export default connect(mapStateToProps, null)(ProductGroup);