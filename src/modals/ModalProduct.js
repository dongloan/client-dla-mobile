import React, { Component } from 'react';
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';
import "./ModalProductStyle.css";
import DemoSlideShow from '../components/GallerySlide/DemoSlideShow';

class ModalProduct extends Component {
    modal = React.createRef();

    static defaultProps = {
        ...React.Component.defaultProps,
        showModalProduct: false,
        className: "myModal",
        closeOnEscape: true,
        closeOnClickOutside: true,
        onCloseProduct: () => { }
    };

    static propTypes = {
        showModalProduct: PropTypes.bool,
        closeOnEscape: PropTypes.bool,
        closeOnClickOutside: PropTypes.bool,
        onCloseProduct: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        this.props.closeOnClickOutside &&
            document.addEventListener("mousedown", this.handleClick, false);
        this.props.closeOnEscape &&
            document.addEventListener("keyup", this.handleKeyPress, false);
    }
    handleKeyPress(event) {
        if (event.key === "Escape") {
            this.props.onCloseProduct();
        }
    }
    handleClick = e => {
        if (
            this.modal.current &&
            !this.modal.current.querySelector(".modal-product-main__sub").contains(e.target)
        ) {
            this.props.onCloseProduct();
        }
    };
    render() {
        // if (!this.props.showModalProduct) {
        //     return null;
        // }
        var { product } = this.props;
        const content = (
            <div className="modal-product-main" ref={this.modal}>
                <div className="modal-product-main__sub">
                    <div className="modal-product-main__sub__left">
                        <DemoSlideShow product={product}/>
                        <div className="modal-product-main__sub__left__info">
                            <p>Show Info</p>
                        </div>
                    </div>
                    <div className="modal-product-main__sub__right">
                        <div className="modal-product-main__sub__right__detail">
                            <img src="icon/close.png" alt="" onClick={this.props.onCloseProduct} />
                            <div className="modal-product-main__sub__right__detail__p">
                                <p>SKU : {product.manHinh}</p>
                            </div>
                            <h2>{product.name}</h2>
                            <h4>{product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h4>
                        </div>
                        <div className="modal-product-main__sub__right__detail__lorem">
                            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Suspendisse Varius Enim In Eros
                                Elementum Tristique. Duis Cursus, Mi Quis Viverra Ornare, Eros Dolor Interdum Nulla,</p>
                        </div>
                        <div className="modal-product-main__sub__right__detail__share">
                            <p>Share On: FB INS LINK</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <>
                <CSSTransition
                    in={this.props.showModalProduct === true}
                    timeout={600}
                    classNames="modal-product-transition"
                    unmountOnExit
                >
                    {
                        () => <div>
                            {content}
                        </div>
                    }
                </CSSTransition>
            </>
        )
    }
}


export default ModalProduct;