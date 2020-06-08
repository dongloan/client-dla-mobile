import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import CartComponent from '../components/CartComponent';
import CartComponentItem from '../components/CartComponentItem';
import CartComponentResult from './../components/CartComponentResult';
import { actAddButtonToCart, actDeleteProduct, actDeleteAllProductPurcharse } from '../actions';
import { getToken } from './../utils/Common';

class CartPage extends Component {
    render() {
        var { cart } = this.props;
        if(getToken()) {
            return (
                <section>
                    <div className="cart-page-main">
                        <div className="cart-page-main__title">
                            <h1>Shopping Cart</h1>
                        </div>
                        <CartComponent>
                            <div className="cart-page-main__sub">
                                <div className="cart-page-main__sub__left">
                                    <div className="cart-page-main__sub__left__title">
                                        <div className="cart-page-main__sub__left__title__1">
                                            <p>sản phẩm</p>
                                        </div>
                                        <div className="cart-page-main__sub__left__title__2">
                                            <p>giá</p>
                                        </div>
                                        <div className="cart-page-main__sub__left__title__3">
                                            <p>số lượng</p>
                                        </div>
                                        <div className="cart-page-main__sub__left__title__4">
                                            <p>tổng tiền</p>
                                        </div>
                                    </div>
                                    {/* cart - item  */}
                                    
                                        {this.showCartComponent(cart)}
                                    
                                    <div className="cart-page-main__sub__left__back">
                                        <Link to="product-list">
                                            <p>RETURN TO SHOP</p>
                                        </Link>
                                    </div>
                                </div>
                                {/* cart - result  */}
                                    {this.showTotalPrice(cart)}
                                </div>
                        </CartComponent>  
                        
                    </div>
                </section>
            )
        } else {
            return (
                <div>
                    <br /><br /><br /><br /><br />
                    <h1>Bạn Phải đăng nhập để xem được giỏ hàng !!! </h1>
                    <br /><br /><br /><br /><br />
                </div>
            );
        }
    }

    showCartComponent = (cart) => {
        var { onAddButtonToCart, onDeleteProduct } = this.props;
        var result = null;
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return (
                    <CartComponentItem
                        key={index}
                        cartItem={cartItem}
                        onAddButtonToCart={onAddButtonToCart}
                        onDeleteProduct={onDeleteProduct}
                    />
                )
            });
            return result;
        }
    }

    showTotalPrice = (cart) => {
        var result = null;
        var { onDeleteProductPurcharse } = this.props;
        if (cart.length > 0) {
            return <CartComponentResult cart={cart} onDeleteProductPurcharse={onDeleteProductPurcharse} />
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddButtonToCart: (product, quantity) => {
            dispatch(actAddButtonToCart(product, quantity))
        },
        onDeleteProduct: (product) => {
            dispatch(actDeleteProduct(product))
        },
        onDeleteProductPurcharse: (cart) => {
            dispatch(actDeleteAllProductPurcharse(cart))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
