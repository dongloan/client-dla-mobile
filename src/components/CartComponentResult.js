import React, { Component } from 'react'

class CartComponentResult extends Component {
    render() {
        var {cart} = this.props;
        return (
            <div className="cart-page-main__sub__right">
                <div className="cart-page-main__sub__right__sub-total">
                    <p>TỔNG SẢN PHẨM CỦA BẠN</p>
                    <p>{cart.length}</p>
                </div>
                <div className="cart-page-main__sub__right__ship">
                    <div className="cart-page-main__sub__right__ship__left">
                        <h5>shipping</h5>
                        <p>Flat Rate :</p>
                        <p>Estimate for Vietnam.</p>
                        <p>Thay đổi địa chỉ của bạn</p>
                    </div>
                    <div className="cart-page-main__sub__right__ship__right">
                        <p>Miễn phí vận chuyển</p>
                    </div>
                </div>
                <div className="cart-page-main__sub__right__tax">
                    <p><strong>Tax</strong>thuế cho việt nam</p>
                    <p>MIỄN THUẾ</p>
                </div>
                <div className="cart-page-main__sub__right__total">
                    <p>total</p>
                    <p>{this.showTotalPrice(cart)}</p>
                </div>
                <div className="cart-page-main__sub__right__check-total">
                    <p 
                        onClick={() => this.onDeleteCompletePurchase(cart)}
                    >
                        Proceed to checkout
                    </p>
                </div>
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

export default CartComponentResult;
