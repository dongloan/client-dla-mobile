import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actGetProductRequest } from './../actions/index';
import ModalCart from './../modals/ModalCart';

class ProductDetailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalProduct : false,
            isOpen : false
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }
    render() {
        var { productInfo } = this.props;
        var {quantity} = productInfo;
        return (
            <div className="product-detail-page-main__sub">
                <div className="product-detail-page-main__sub__left">
                    <div className="product-detail-page-main__sub__left__img">
                        <img src={productInfo.imageSlide1} alt="" />
                    </div>
                    <div className="product-detail-page-main__sub__left__img">
                        <img src={productInfo.imageSlide2} alt="" />
                    </div>
                    <div className="product-detail-page-main__sub__left__img">
                        <img src={productInfo.imageSlide2} alt="" />
                    </div>
                    <div className="product-detail-page-main__sub__left__img">
                        <img src={productInfo.imageSlide1} alt="" />
                    </div>
                </div>
                <div className="product-detail-page-main__sub__right">
                    <div className="product-detail-page-main__sub__right__title">
                        <h2>{productInfo.name}</h2>
                    </div>
                    <div className="product-detail-page-main__sub__right__price">
                        <p>Giá : {productInfo.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                    <div className="product-detail-page-main__sub__right__detail">

                        <div className="tableparameter">
                            <p>Chi tiết kỹ thuật</p>
                            <ul className="parameter">
                                <li className="man-hinh"><span>Màn hình:</span><div>{productInfo.manHinh}</div></li>

                                <li className="os"> <span>Hệ điều hành:</span><div>{productInfo.hdh}</div></li>

                                <li className="camera-sau"> <span>Camera sau:</span><div>{productInfo.cameraSau}</div></li>

                                <li className="camera-truoc"> <span>Camera trước:</span><div>{productInfo.cameraTruoc}</div></li>

                                <li className="cpu"><span>CPU:</span><div>{productInfo.cpu}</div></li>

                                <li className="ram"><span>RAM:</span><div>{productInfo.ram}</div></li>

                                <li className="bo-nho-trong"> <span>Bộ nhớ trong:</span><div>{productInfo.boNhoTrong}</div></li>

                                <li className="the-sim"> <span>Thẻ SIM:</span><div>{productInfo.theSim}</div></li>

                                <li className="dung-luong-pin"> <span>Dung lượng pin:</span><div>{productInfo.dungLuongPin}</div></li>
                            </ul>

                        </div>
                    </div>
                    <div className="product-detail-page-main__sub__right__add" onClick={() => this.onAddProduct(productInfo, quantity)} >
                        <div className="product-detail-page-main__sub__right__add__cart" onClick={this.toggleModal} >
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                    <ModalCart show={this.state.isOpen} onClose={this.toggleModal} />
                </div>
            </div>
        )
    }

    onAddProduct = (sp, quantity) => {
        this.props.onGetProduct(sp, quantity);
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProduct: (product, quantity) => {
            dispatch(actGetProductRequest(product.id))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductDetailItem);

