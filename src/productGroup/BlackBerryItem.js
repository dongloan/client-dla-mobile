import React, { Component } from 'react';
import ModalProduct from './../modals/ModalProduct';
import ModalCart from './../modals/ModalCart';
import {Link, NavLink} from 'react-router-dom';

class BlackBerryItem  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalProduct : false,
            isOpen : false
        }
    }

    toggleModalProduct = () => {
        this.setState({
            isModalProduct : !this.state.isModalProduct
        });
    }

    toggleModal = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
    render() {
        var {productKing} = this.props;
        return (
            <div className="product-page-main__right__sub">
                <div className="product-page-main__right__sub__button" onClick={this.toggleModalProduct}>
                    <img src="icon/full-width.png" alt="" />
                </div>
                <ModalProduct showModalProduct={this.state.isModalProduct} onCloseProduct={this.toggleModalProduct} product={productKing} />
                <div className="product-page-main__right__sub__background">
                    <img src={productKing.image} alt="" />
                    <h2>{productKing.name}</h2>
                    <h3>{productKing.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h3>
                    <NavLink to={`${productKing.id}`}
                        className="background-a"
                    >
                        details
                    </NavLink>
                    <button className="background-b" onClick={() => this.onAddProduct(productKing, productKing.quantity)}>
                        <Link to="product-group-blackBerry" className="background-b" onClick={this.toggleModal}>
                            ADD TO CART                          
                        </Link>
                    </button>
                </div>
                <ModalCart show={this.state.isOpen} onClose={this.toggleModal} />
            </div>
        )
    }

    onAddProduct = (sp, quantity) => {
        this.props.onGetProduct(sp, quantity);
        // console.log('sp : ', sp);
        // console.log('quantity : ', quantity);
    }
}

export default BlackBerryItem;
