import React, { Component } from 'react';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import Cart from './../components/Cart';
import { connect } from 'react-redux';
import { actAddButtonToCart, actDeleteProduct, actDeleteAllProductPurcharse } from '../actions';
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';
import './ModalCartStyle.css';

export class ModalCart extends Component {      // class và export class đều được
    modal = React.createRef();

    static defaultProps = {
        ...React.Component.defaultProps,
        show: false,
        className: "myModal",
        closeOnEscape: true,
        closeOnClickOutside: true,
        onClose: () => { }
    };

    static propTypes = {
        show: PropTypes.bool,
        closeOnEscape: PropTypes.bool,
        closeOnClickOutside: PropTypes.bool,
        onClose: PropTypes.func
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
            this.props.onClose();
        }
    }
    handleClick = e => {
        if (
            this.modal.current &&
            !this.modal.current.querySelector(".modal-cart-main__sub").contains(e.target)
        ) {
            this.props.onClose();
        }
    };

    // UNSAFE_componentWillMount() {
    //     this.props.closeOnClickOutside &&
    //         document.removeEventListener("mousedown", this.handleClick, false);
    //     this.props.closeOnEscape &&
    //         document.removeEventListener("keyup", this.handleKeyPress, false);
    // }
    render() {

        // if (!this.props.show) {
        //     return null;
        // }
        var { onClose } = this.props;
        var { cart } = this.props;
        const content = (
            <div className="modal-cart-main" ref={this.modal}>
                <div className="modal-cart-main__sub">
                    <div className="modal-cart-main__sub__top">
                        <div className="modal-cart-main__sub__top__h5">
                            <h5>Your Cart : {cart.length} </h5>
                        </div>
                        <div className="modal-cart-main__sub__top__close" onClick={onClose}>
                            <img src="icon/close.png" alt="" />
                        </div>
                    </div>
                    <Cart>
                        {this.showCart(cart)}
                        {this.showTotalPrice(cart)}
                    </Cart>
                </div>
            </div>
        )
        return (
            <>                
                <CSSTransition
                    in={this.props.show === true}
                    timeout={600}
                    classNames="modal-transition"
                    unmountOnExit
                >
                    {
                        () =>   <div>
                                    {content}
                                </div>
                    }
                </CSSTransition>
            </>
        )
    }

    showCart = (cart) => {
        var result = [];
        var { onAddButtonToCart, onDeleteProduct } = this.props;
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return (
                    <CartItem
                        key={index}
                        index={index}
                        cartItem={cartItem}
                        onAddButtonToCart={onAddButtonToCart}
                        onDeleteProduct={onDeleteProduct}
                    />
                )
            });
        }
        return result;
    }

    showTotalPrice = (cart) => {
        var result = null;
        var { onDeleteProductPurcharse } = this.props;
        if (cart.length > 0) {
            return <CartResult cart={cart} onDeleteProductPurcharse={onDeleteProductPurcharse} />
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

// ModalCart.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     show: PropTypes.bool,
//     children: PropTypes.node
// };

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

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);











// import React, { Component } from 'react';
// import ReactDom from "react-dom";
// import CartItem from './../components/CartItem';
// import CartResult from './../components/CartResult';
// import Cart from './../components/Cart';
// import { connect } from 'react-redux';
// import { actAddButtonToCart, actDeleteProduct, actDeleteAllProductPurcharse } from '../actions';
// import PropTypes from "prop-types";

// // style
// import StyledModalCart from './style.css';
// const modalRoot = document.getElementById("modal-cart-main");

// class ModalCart extends Component {      // class và export class đều được

//     static defaultProps = {
//         id: "",
//         modalClass: "",
//         modalSize: "md"
//     };

//     static propTypes = {
//         id: PropTypes.string.isRequired,
//         onClose: PropTypes.func.isRequired,
//         isOpen: PropTypes.bool.isRequired,
//         modalClass: PropTypes.string,
//         modalSize: PropTypes.string
//     };

//     state = { fadeType: null };

//     background = React.createRef();

//     componentDidMount() {
//         window.addEventListener("keydown", this.onEscKeyDown, false);
//         setTimeout(() => this.setState({ fadeType: "in" }), 0);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (!this.props.isOpen && prevProps.isOpen) {
//             this.setState({ fadeType: "out" });
//         }
//     }

//     componentWillUnmount() {
//         window.removeEventListener("keydown", this.onEscKeyDown, false);
//     }

//     transitionEnd = e => {
//         if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;

//         if (this.state.fadeType === "out") {
//             this.props.onClose();
//         }
//     };

//     onEscKeyDown = e => {
//         if (e.key !== "Escape") return;
//         this.setState({ fadeType: "out" });
//     };

//     handleClick = e => {
//         e.preventDefault();
//         this.setState({ fadeType: "out" });
//     };

//     render() {
//         var {cart} = this.props;
//         return ReactDom.createPortal(
//             <StyledModalCart
//               id={this.props.id}
//               className={`wrapper ${"size-" + this.props.modalSize} fade-${
//                 this.state.fadeType
//               } ${this.props.modalClass}`}
//               role="dialog"
//               modalSize={this.props.modalSize}
//               onTransitionEnd={this.transitionEnd}
//             >
//               <div id="modal-cart-main">
//                 <div className="modal-cart-main__sub">
//                     <div className="modal-cart-main__sub__top">
//                         <div className="modal-cart-main__sub__top__h5">
//                             <h5>Your Cart : {cart.length} </h5>
//                         </div>
//                         <div className="modal-cart-main__sub__top__close" onClick={this.handleClick}>
//                             <img src="icon/close.png" alt="" />
//                         </div>
//                     </div>
//                     <Cart>
//                         {this.showCart(cart)}
//                         {this.showTotalPrice(cart)}
//                     </Cart>
//                 </div>
//             </div>
//             <div 
//                 className={`background`}
//                 onMouseDown={this.handleClick}
//                 ref={this.background}
//             />
//             </StyledModalCart>,
//             modalRoot
//           );
//         }

//     showCart = (cart) => {
//         var result = [];
//         var { onAddButtonToCart, onDeleteProduct } = this.props;
//         if (cart.length > 0) {
//             result = cart.map((cartItem, index) => {
//                 return (
//                     <CartItem
//                         key={index}
//                         index={index}
//                         cartItem={cartItem}
//                         onAddButtonToCart={onAddButtonToCart}
//                         onDeleteProduct={onDeleteProduct}
//                     />
//                 )
//             });
//         }
//         return result;
//     }

//     showTotalPrice = (cart) => {
//         var result = null;
//         var { onDeleteProductPurcharse } = this.props;
//         if (cart.length > 0) {
//             return <CartResult cart={cart} onDeleteProductPurcharse={onDeleteProductPurcharse} />
//         }
//         return result;
//     }
// }

// const mapStateToProps = state => {
//     return {
//         cart: state.cart
//     }
// }

// // ModalCart.propTypes = {
// //     onClose: PropTypes.func.isRequired,
// //     show: PropTypes.bool,
// //     children: PropTypes.node
// // };

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onAddButtonToCart: (product, quantity) => {
//             dispatch(actAddButtonToCart(product, quantity))
//         },
//         onDeleteProduct: (product) => {
//             dispatch(actDeleteProduct(product))
//         },
//         onDeleteProductPurcharse: (cart) => {
//             dispatch(actDeleteAllProductPurcharse(cart))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);