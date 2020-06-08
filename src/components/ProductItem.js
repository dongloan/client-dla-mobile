import React, { Component } from 'react';
import ModalProduct from './../modals/ModalProduct';
import ModalCart from './../modals/ModalCart';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
// import { CSSTransition } from 'react-transition-group';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalProduct : false,
            isOpen : false
        }
    }

    toggleModalProduct = (e) => {
        this.setState({
            isModalProduct : !this.state.isModalProduct
        });
    }

    toggleModal = (e) => {
        this.setState({
            isOpen : !this.state.isOpen,
        });
    }

    render() {
        var {product, quantity} = this.props;
        // var {url} = this.props;
        // console.log(match);
        // console.log(url);
        return (
            <div className="product-page-main__right__sub">
                <div className="product-page-main__right__sub__button" onClick={this.toggleModalProduct}>
                    <img src="icon/full-width.png" alt="" />
                </div>
                {
                    <ModalProduct 
                        showModalProduct={this.state.isModalProduct} 
                        closeOnEscape 
                        onCloseProduct={() => this.setState({ isModalProduct: false })} 
                        onClickOutside={this.onClickOutside}  
                        product={product}                    
                    />
                }
                <div className="product-page-main__right__sub__background">
                    
                        <img src={product.image} alt="" />
                    
                    <h2>{product.name}</h2>
                    <h3>{product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h3>
                    <NavLink 
                        to={`/${product.id}`}
                        className="background-a"
                        // onClick={() => this.getProductInfo(product)}
                    >
                        details
                    </NavLink>
                    <button className="background-b" onClick={() => this.onAddProduct(product, quantity)}>
                        <Link to="product-list" className="background-b" onClick={this.toggleModal}>
                            ADD TO CART                          
                        </Link>
                    </button>
                </div>
                    {
                        <ModalCart 
                            show={this.state.isOpen} 
                            closeOnEscape 
                            onClose={() => this.setState({ isOpen: false })} 
                            onClickOutside={this.onClickOutside}                            
                        />
                    }                                   
            </div>
        )
    }
    onAddProduct = (sp, quantity) => {
        this.props.onGetProduct(sp, quantity);
        // console.log('sp : ', sp);
        // console.log('quantity : ', quantity);
    }
    // getProductInfo = (product) => {
    //     this.props.onGetProductInfo(product);
    // }
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onGetProductInfo : (product) => {
//             dispatch(actGetProductInfo(product))
//         }
//     }
// }

export default connect(null, null)(ProductItem);
//"https://assets.website-files.com/5cfd9ec0982a743102f284b0/5e3c21932dd211088ed6bcc8_oc.png"















// import React, { Component } from 'react';
// import ModalProduct from './../modals/ModalProduct';
// import ModalCart from './../modals/ModalCart';
// import {Link, NavLink} from 'react-router-dom';
// import {connect} from 'react-redux';
// // import { CSSTransition } from 'react-transition-group';

// class ProductItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isModalProduct : false,
//             isModalOpen: false
//         }
//     }

//     toggleModalProduct = (e) => {
//         this.setState({
//             isModalProduct : !this.state.isModalProduct
//         });
//     }

//     toggleState = e => {
//         this.setState({
//           isModalOpen: !this.state.isModalOpen
//         });
//       };


//     render() {
//         var {product, quantity} = this.props;
//         return (
//             <div className="product-page-main__right__sub">
//                 <div className="product-page-main__right__sub__button" onClick={this.toggleModalProduct}>
//                     <img src="icon/full-width.png" alt="" />
//                 </div>
//                 <ModalProduct showModalProduct={this.state.isModalProduct} closeOnEscape onCloseProduct={() => this.setState({ isModalProduct: false })} product={product} />
//                 <div className="product-page-main__right__sub__background">
                    
//                         <img src={product.image} alt="" />
                    
//                     <h2>{product.name}</h2>
//                     <h3>{product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h3>
//                     <NavLink 
//                         to={`/${product.id}`}
//                         className="background-a"
//                         // onClick={() => this.getProductInfo(product)}
//                     >
//                         details
//                     </NavLink>
//                     <button className="background-b" onClick={() => this.onAddProduct(product, quantity)}>
//                         <Link to="product-list" className="background-b" onClick={this.toggleState}>
//                             ADD TO CART                          
//                         </Link>
//                     </button>
//                         {this.state.isModalOpen && (
//                         <ModalCart id="modal-cart-main"
//                             isOpen={this.state.isModalOpen}
//                             onClose={this.toggleState}
//                         />
//                         )}
//                 </div>
                                   
//             </div>
//         )
//     }
//     onAddProduct = (sp, quantity) => {
//         this.props.onGetProduct(sp, quantity);
//         // console.log('sp : ', sp);
//         // console.log('quantity : ', quantity);
//     }
//     // getProductInfo = (product) => {
//     //     this.props.onGetProductInfo(product);
//     // }
// }

// // const mapDispatchToProps = (dispatch, props) => {
// //     return {
// //         onGetProductInfo : (product) => {
// //             dispatch(actGetProductInfo(product))
// //         }
// //     }
// // }

// export default connect(null, null)(ProductItem);