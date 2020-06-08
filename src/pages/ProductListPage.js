import React, { Component } from 'react';
import ProductList from './../components/ProductList';
import ProductItem from './../components/ProductItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from './../actions/product';
import { actGetProductRequest } from './../actions/index';
import { Link } from 'react-router-dom';

class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            visible: 6,
            error: false
        };
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 4 };
        });
    }

    UNSAFE_componentWillMount() {
        const { onProductAction } = this.props;
        const { fetchProductList } = onProductAction;
        fetchProductList();
    }

    render() {
        var { products } = this.props;
        return (
            <section>
                <div id="product-page-main-super container-fuild">
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
                        <ProductList>
                            {this.showProduct(products)}
                        </ProductList>
                    </div>
                    <div className="product-page-main-super__load-more">
                        <div className={this.state.visible < products.length ? "product-page-main-super__load-more__p" : "product-page-main-super__load-more__p disable-load-more"} onClick={this.loadMore}>
                            <p className="load-more">Load more</p>
                        </div>
                    </div>
                    <div className="shipping-page-main container-fuild">
                        <div className="shipping-page-main__sub">
                            <div className="shipping-page-main__sub__title">
                                <p>WE WORK TO MAKE HARD IT REAL!</p>
                                <h2>Shipping and Handling</h2>
                            </div>
                            <div className="shipping-page-main__sub__content">
                                <div className="shipping-page-main__sub__content__detail">
                                    <h4>Return Policy</h4>
                                    <p>100% money back guarantee</p>
                                </div>
                                <div className="shipping-page-main__sub__content__detail">
                                    <h4>Free Shipping</h4>
                                    <p>free shipping ovrer 99$</p>
                                </div>
                                <div className="shipping-page-main__sub__content__detail">
                                    <h4>Help & Support</h4>
                                    <p>support all day 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    showProduct = (products) => {
        var result = null;
        const { onGetProduct } = this.props;
        var { match } = this.props;
        // console.log(match);
        if (products.length > 0) {
            result = products.slice(0, this.state.visible).map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        index={product.id}
                        product={product}
                        onGetProduct={onGetProduct}
                        match={match}
                    />
                )
            })
        }
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
        onProductAction: bindActionCreators(productAction, dispatch),
        onGetProduct: (product, quantity) => {
            dispatch(actGetProductRequest(product.id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);










// import React, { Component } from 'react';
// import ProductList from './../components/ProductList';
// import ProductItem from './../components/ProductItem';
// import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as productAction from './../actions/product';
// import { actGetProductRequest } from './../actions/index';

// class ProductListPage extends Component {

//     UNSAFE_componentWillMount(){
//         const {onProductAction} = this.props;
//         const {fetchProductList} = onProductAction;
//         fetchProductList();
//     }

//     render() {
//         var {products} = this.props;
//         return (
//             <section>
//                 <ProductList>
//                     {this.showProduct(products)}
//                 </ProductList>
//             </section>
//         )
//     }

//     showProduct = (products) => {
//         var result = null;
//         const { onGetProduct } = this.props;
//         var {match} = this.props;
//         console.log(match);
//         if(products.length > 0){
//             result = products.map((product, index) => {
//                 return (
//                     <ProductItem 
//                         key={index}
//                         index={product.id}
//                         product={product}
//                         onGetProduct={onGetProduct}
//                         match={match}
//                     />
//                 )
//             });
//         }
//         return result;
//     }
// }

// const mapStateToProps = state => {
//     return {
//         products : state.products.productList,
//     }
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onProductAction : bindActionCreators(productAction, dispatch),
//         onGetProduct: (product, quantity) => {
//         dispatch(actGetProductRequest(product.id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
