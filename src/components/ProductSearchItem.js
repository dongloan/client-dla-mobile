import React, { Component } from 'react';
import { actGetProductInfo } from './../actions/index';
import { connect } from 'react-redux';
import ModalProduct from './../modals/ModalProduct';
import ModalCart from './../modals/ModalCart';
import { Link } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';

class ProductSearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalProduct: false,
            isOpen: false
        }
    }

    toggleModalProduct = () => {
        this.setState({
            isModalProduct: !this.state.isModalProduct
        });
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onHandleClick = (product) => {
        this.props.onViewProduct(product);
    }

    render() {
        // var { products, keyword } = this.props;
        var {productSearchItem, index, keyword} = this.props;
        var {quantity} = productSearchItem;
        if(productSearchItem !== null && productSearchItem.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ){
            return (
                <div className="product-page-main__right__sub" key={index}>
                    <div className="product-page-main__right__sub__button" onClick={this.toggleModalProduct}>
                        <img src="icon/full-width.png" alt="" />                               
                    </div>
                    <ModalProduct showModalProduct={this.state.isModalProduct} onCloseProduct={this.toggleModalProduct} product={productSearchItem} />
                    <div className="product-page-main__right__sub__background">
                        <img src={productSearchItem.image} alt="" />
                        <h2>{productSearchItem.name}</h2>
                        <h3>{productSearchItem.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h3>
                        <Link 
                            to={`/${productSearchItem.id}`}
                            className="background-a"
                        >
                        details
                        </Link>
                        <button className="background-b" onClick={() => this.onAddProduct(productSearchItem, quantity)}>
                            <Link to='/cart' className="background-b" onClick={this.toggleModal}>
                                ADD TO CART
                            </Link>
                        </button>
                    </div>
                    <ModalCart show={this.state.isOpen} onClose={this.toggleModal} productSearchItem={productSearchItem} />
                </div>
            )    
        }else if( productSearchItem[index].name.toLowerCase() !== keyword.toLowerCase()){
            return (
                <NotFoundPage />
            )
        }
               
    }

    onAddProduct = (sp, quantity) => {
        this.props.onGetProduct(sp, quantity);
    }
}

const mapStateToProps = state => {
    return {
        keyword : state.searchProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onViewProduct: (productSearchItem) => {
            dispatch(actGetProductInfo(productSearchItem))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearchResult);

