import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        return (
            <div className="product-page-main__right">
                {this.props.children}
            </div>
        )
    }
}

export default ProductList;
















// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import SearchProduct from './SearchProduct';


// class ProductList extends Component {
//     renderSearchProduct () {
//         let xhtml = null;
//         xhtml = (
//             <SearchProduct />
//         )
//         return xhtml;
//     }
//     render() {
//         return (
//             <div className="product-page-main-super container-fuild">

//                 {this.renderSearchProduct()}

//                 <div className="product-page-main container-fuild">
//                     <div className="product-page-main__left">
//                         <div className="product-page-main__left__sub">
//                             <h4>By Categories</h4>
//                             <div className="product-page-main__left__sub__detail">
//                                 <ul className="product-page-main__left__sub__detail__ul">
//                                     <li><a href=" #">all items</a></li>
//                                     <li><a href=" #">iphone</a></li>
//                                     <li><a href=" #">samsung</a></li>
//                                     <li><a href=" #">black berry</a></li>
//                                     <li><a href=" #">oppo</a></li>
//                                     <li><a href=" #">xiaomi</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="product-page-main__left__sub item">
//                             <h5>Featured Item</h5>
//                             <div className="product-page-main__left__sub__background">
//                                 <img
//                                     src="https://assets.website-files.com/5cfd9ec0982a743102f284b0/5e3c2f5d5dad361078fec9a5_LAptop22.png" alt="" />
//                                 <h2>Apple Watch 4</h2>
//                                 <h3>$ 750.00 USD</h3>
//                                 <a href=" #" className="background-a">details</a>
//                             </div>
//                         </div>
//                         <div className="product-page-main__left__sub subscribe">
//                             <div className="product-page-main__left__sub__3">
//                                 <h5>Subscribe</h5>
//                                 <input placeholder="Please Enter Your Address" />
//                                 <br />
//                                 <a href=" #" className="background-a2">subscribe</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product-page-main__right">
//                         {this.props.children}
//                     </div>
//                 </div>
//                 <div className="shipping-page-main container-fuild">
//                     <div className="shipping-page-main__sub">
//                         <div className="shipping-page-main__sub__title">
//                             <p>WE WORK TO MAKE HARD IT REAL!</p>
//                             <h2>Shipping and Handling</h2>
//                         </div>
//                         <div className="shipping-page-main__sub__content">
//                             <div className="shipping-page-main__sub__content__detail">
//                                 <h4>Return Policy</h4>
//                                 <p>100% money back guarantee</p>
//                             </div>
//                             <div className="shipping-page-main__sub__content__detail">
//                                 <h4>Free Shipping</h4>
//                                 <p>free shipping ovrer 99$</p>
//                             </div>
//                             <div className="shipping-page-main__sub__content__detail">
//                                 <h4>Help & Support</h4>
//                                 <p>support all day 24/7</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         products : state.products.productList
//     }
// }

// export default connect(mapStateToProps, null)(ProductList);
