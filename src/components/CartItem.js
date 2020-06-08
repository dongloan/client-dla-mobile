import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        var {cartItem} = this.props;
        // console.log(cartItem);
        var {quantity} = cartItem;
        return (
            <>
                <div className="modal-cart-main__sub__product">
                    <div className="modal-cart-main__sub__product__img">
                        <img src={cartItem.product.image} alt={cartItem.product.name} />
                    </div>
                    <div className="modal-cart-main__sub__product__detail">
                        <p>{cartItem.product.name}</p>
                        <p>Giá : {cartItem.product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                        <a 
                            href=" #" 
                            onClick={() => this.onDeleteProductCart(cartItem.product)} 
                        >
                            Remove
                        </a>
                        <span className="qty"> {quantity} </span> 
                        <div className="modal-cart-main__sub__product__price">
                            <p>Tổng tiền : {this.showPrice(cartItem.product.price, cartItem.quantity)}</p>
                        </div>
                    </div>
                    <div className="modal-cart-main__sub__product__quantity">
                        <div className="btn-cart" data-toggle="buttons">
                            <label  onClick={() => this.onButtonCart(cartItem.product, cartItem.quantity +1 )}
                            >
                                <input className="btn-add-odd" type="button" value="+" />
                            </label>
                            <label  onClick={() => this.onButtonCart(cartItem.product, cartItem.quantity - 1)}
                            >
                                <input className="btn-add-odd" type="button" value="-" />
                            </label>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }

    showPrice = (gia, sl) => {
        // console.log(gia, sl);
        var total = gia*sl;
        var total2 = total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        return total2;
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

export default CartItem;
