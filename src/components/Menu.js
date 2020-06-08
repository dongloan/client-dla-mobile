import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import ModalCart from './../modals/ModalCart';
import ModalSearch from './../modals/ModalSearch';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productAction from './../actions/product';
import {getToken, getUser} from './../utils/Common';

const menus = [
    {
        name : 'Sản Phẩm',
        to : '/product-list',
        exact : false
    },
    {
        name : 'About Us',
        to : '/about',
        exact : false
    },
    {
        name : 'Gallery',
        to : '/gallery',
        exact : false
    },
    {
        name : 'Liên Hệ',
        to : '/contact',
        exact : false
    },
    {
        name : 'Giỏ Hàng',
        to : '/cart',
        exact : false
    }
];

const menuLogin = [
    {
        name : 'Login',
        to : '/login',
        exact : false
    },
    {
        name : 'Register',
        to : '/register',
        exact : false
    }
]


// const user = getUser();
// const username = user.username;
// console.log(username);
// const ds = [
//     {
//         name : 'ProFile',
//         to : '/dashboard',
//         exact : false
//     }
// ];

const contentSubMenu = (
    <div className='sub-menu-item'>
        <div className="sub-menu-item__sub">
            <NavLink to="/product-group-iphone">
                <img src="https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-200x200.jpg" alt="" />
            </NavLink>
            <p>IPHONE</p>
        </div>
        <div className="sub-menu-item__sub">
            <NavLink to="/product-group-samsung">
                <img src="https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-200x200.jpg" alt="" />
            </NavLink>
            <p>SAMSUNG</p>
        </div>
        <div className="sub-menu-item__sub">
            <NavLink to="/product-group-blackBerry">
                <img src="https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg" alt="" />
            </NavLink>
            <p>BLACK BERRY</p>
        </div>
        <div className="sub-menu-item__sub">
            <NavLink to="/product-group-oppo">
                <img src="https://cdn.tgdd.vn/Products/Images/42/200438/oppo-reno-black-400x400.jpg" alt="" />
            </NavLink>
            <p>OPPO</p>
        </div>
        <div className="sub-menu-item__sub">
            <NavLink to="/product-group-xiaomi">
                <img src="https://cdn.tgdd.vn/Products/Images/42/198394/xiaomi-mi-9-se-1-400x400.jpg" alt="" />
            </NavLink>
            <p>XIAOMI</p>
        </div>
        <div className="sub-menu-item__sub">
            <NavLink to="/product-group-realme">
                <img src="https://cdn.tgdd.vn/Products/Images/42/218360/realme-6i-trang-600-200x200.jpg" alt="" />
            </NavLink>
            <p>REALME</p>
        </div>
    </div>
)

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) =>{
                var underlineItem = match ? 'underline-hover-active' : '';
                
                return (
                    <Link to={to}>
                        <li>
                            {label}
                        </li>                                                                  
                        <div className='underline-hover'></div> 
                        <div className={underlineItem}></div>
                    </Link>
                )
            }}
        />
    )
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
            isSearchModal : false,
            isMenu : false,
            ds : [
                {
                    name : '',
                    to : '',
                    exact : false
                } 
            ]        
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    toggleSearch = (e) => {
        this.setState({
            isSearchModal : !this.state.isSearchModal
        })
    }

    toggleMenu = () => {
        this.setState({
            isMenu : !this.state.isMenu
        })
    }

    componentDidMount = () => {
        $(document).ready(function() {
            $(window).scroll(function(event){
                // var pos_body = $('html,body').scrollTop();
                var pos_menu_top = $('.header-top__sub').offset().top;
                // console.log(pos_menu_top);
                if(pos_menu_top > 80){
                    $('.header-top__sub').addClass('background-header-top-fixed');
                }else{
                    $('.header-top__sub').removeClass('background-header-top-fixed');
                }
            })
        })
        const {onProductAction} = this.props;
        const {fetchProductList} = onProductAction;
        fetchProductList();
    }

    UNSAFE_componentWillMount(){
        // const {onProductAction} = this.props;
        // const {fetchProductList} = onProductAction;
        // fetchProductList();
        if(getUser()) {
            this.setState({
                ds : [
                    {
                        name : getUser().username,
                        to : '/dashboard',
                        exact : false
                    }
                ]
            })
        }else {
            this.setState({
                ds : [
                    {
                        name : '',
                        to : '/dashboard',
                        exact : false
                    }
                ]
            })
        }
    }

    render() {
        var {isMenu, ds} = this.state;
        return (
            <main>
                <div className="header-top">
                    <div className="header-top__sub">
                        <div className="header-top__left">
                            <Link to="/">
                                <h1>DLA STORE</h1>
                            </Link>
                        </div>
                        <div className="header-top__right">
                            <div id="header-top__right__menu-sub" onClick={this.toggleMenu} >
                                <div className="menu-sub__icon"></div>
                                <div className="menu-sub__icon"></div>
                                <div className="menu-sub__icon"></div>
                            </div>
                            {/* <div className={getToken() !== null ? "dash-board" : "dash-board disable-dash-board"} >
                                { this.showDs(ds) }
                            </div> */}
                            { getToken() !== null ? 
                                <div className="dash-board">{ this.showDs(ds) }</div>
                                :
                                <div></div>
                            }
                            <div id="menu-second" className={isMenu === true ? 'menu-open' : ''}>
                                <ul className="header-top__ul">
                                    <li className="categories">
                                        <p>CATELORIES</p>
                                        {contentSubMenu}
                                    </li>
                                    {/* <li><a href=" #">Trang chủ</a>
                                        <div className="underline-hover"></div>
                                    </li>
                                    <li><a href="product.html" target="new">Sản Phẩm</a>
                                        <div className="underline-hover"></div>
                                    </li>
                                    <li><a href=" #">Shop</a>
                                        <div className="underline-hover"></div>
                                    </li>
                                    <li><a href=" #">ABOUT US</a>
                                        <div className="underline-hover"></div>
                                    </li>
                                    <li><a href=" #">Blogs</a>
                                        <div className="underline-hover"></div>
                                    </li>
                                    <li><a href=" #">Liên Hệ</a>
                                        <div className="underline-hover"></div>
                                    </li> */}
                                    { this.showMenus(menus) }
                                    { this.showMenuLogin(menuLogin) }                                  
                                </ul>
                            </div>
                        </div>
                        <div className="header-top__search-cart">
                            <div className="header-top__search-cart__search">
                                <div className="search-open" id="btn-search" onClick={this.toggleSearch}>
                                    <img src="icon/search1.png" alt="" />
                                </div>
                            </div>
                            <div className="header-top__search-cart__cart">
                                <div className="cart-open" onClick={this.toggleModal}>
                                    <img src="icon/cart1.png " alt="" />
                                </div>
                            </div>                  
                        </div>
                    </div>
                </div>

                <ModalCart show={this.state.isOpen} onClose={this.toggleModal} />
                <ModalSearch showSearch={this.state.isSearchModal} closeOnEscape onCloseSearch={() => this.setState({ isSearchModal: false })}/>
                
                <div className="main-page-wrapper container-fuild">
                    <div className="main-page-wrapper-circle-left"></div>
                    <div className="main-page-wrapper-circle-right"></div>
                    <div className="main-page-wrapper-circle-1"></div>
                    <div className="main-page-wrapper-circle-2"></div>            
                    <div className="container-wrapper">
                        <div className="container-wrapper__sub">
                            {/* <h1><span>Welcome</span> To DLA REACT JS Page Mobile</h1> */}
                            <h1>
                                <span>D</span>
                                <span> L</span>
                                <span> A</span>
                                <span> M</span>
                                <span> O</span>
                                <span> B</span>
                                <span> I</span>
                                <span> L</span>
                                <span> E</span>
                            </h1>
                            <p>The React Page for Mobile Desktop Laptop in new 2020.</p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;  
    }

    showMenuLogin = (menuLogin, ds) => {
        var result = null;
        if(!getToken()) {
            result = menuLogin.map((menuLoginItem, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menuLoginItem.name}
                        to={menuLoginItem.to}
                        activeOnlyWhenExact={menuLoginItem.exact}
                    />
                )
            });
        return result;
        }else {
            return (
                ''
            );
        }        
    }

    showDs = (ds) => {
        var result = null;
        if(getToken()) {
            result = ds.map((dsItem, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={dsItem.name}
                        to={dsItem.to}
                        activeOnlyWhenExact={dsItem.exact}
                    />
                )
            });
        return result;
        } else {
            return ('');
        }
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onProductAction : bindActionCreators(productAction, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Menu);

        
// rcc: react class component.
// cdm: componentDidMount.
// cwun: componentWillUnmount.
// sst: setState with object as parameter.
// ssf: setSate with function as parameter.