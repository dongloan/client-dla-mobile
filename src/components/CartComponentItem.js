import React, { Component } from 'react';

class CartComponentItem extends Component {
    render() {
        var {cartItem} = this.props;
        var {quantity} = cartItem;
        return (
            <div className="cart-page-main__sub__left__element">
                <div className="cart-page-main__sub__left__element__img">
                    <img src={cartItem.product.image} alt="" />
                    <div className="cart-page-main__sub__left__element__img__p">
                        <p>{cartItem.product.name}</p>
                        <p 
                            onClick={() => this.onDeleteProductCart(cartItem.product)}
                        >
                            Xóa
                        </p>
                    </div>
                </div>
                <div className="cart-page-main__sub__left__element__price">
                    <p>{cartItem.product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                </div>
                <div className="cart-page-main__sub__left__element__quantity">
                    <p onClick={() => this.onButtonCart(cartItem.product, cartItem.quantity + 1 )} >+</p>
                    <span>{quantity}</span>
                    <p onClick={() => this.onButtonCart(cartItem.product, cartItem.quantity - 1 )} >-</p>
                </div>
                <div className="cart-page-main__sub__left__element__total">
                    <p>{this.showPrice(cartItem.product.price, quantity)}</p>
                </div>
            </div>
        )
    }

    showPrice = (gia, sl) => {
        // console.log(gia, sl);
        var total = gia*sl;
        return total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }

    onButtonCart = (sp, quantity) => {
        if(quantity > 0){
            this.props.onAddButtonToCart(sp, quantity);
        }
        
        // console.log(quantity);
    }

    onDeleteProductCart = (sp) => {
        this.props.onDeleteProduct(sp);
    }
}

export default CartComponentItem;
