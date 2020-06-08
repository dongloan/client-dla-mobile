import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CartResult extends Component {
    render() {
        var {cart} = this.props;
        return (
            <div>
                <div className="modal-cart-main__sub__total">
                    <p>Subtotal</p>
                    <h5> {this.showTotalPrice(cart)} </h5>
                </div>
                <Link to="/cart">
                <div className="modal-cart-main__sub__check-out">
                    {/* <button onClick={() => this.onDeleteCompletePurchase(cart)}>Continue to checkout</button> */}
                        <button onClick={this.moveToCart}>Continue to checkout</button>
                </div>
                </Link>
            </div>
        )
    }

    showTotalPrice = (cart) => {
        var total = 0;
        if(cart.length > 0){
            for(var i = 0; i < cart.length; i++){
                total += cart[i].product.price*cart[i].quantity;
                // console.log(typeof total);                
            }
        }
        return total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }

    onDeleteCompletePurchase = (cart) => {
        this.props.onDeleteProductPurcharse(cart);       
    }
}

export default CartResult;
