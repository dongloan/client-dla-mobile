import React from 'react';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ShopPage from './pages/ShopPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductSearchPage from './pages/ProductSearchPage';
import NotFoundPage from './pages/NotFoundPage';
import IphonePage from './productGroup/IphonePage';
import SamsungPage from './productGroup/SamsungPage';
import BlackBerryPage from './productGroup/BlackBerryPage';
import OppoPage from './productGroup/OppoPage';
import XiaomiPage from './productGroup/XiaomiPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
// import JobListPage from './pages/JobListPage';
// import ModalSearch from './modals/ModalSearch';
import ModalCart from './modals/ModalCart';
import RealmePage from './productGroup/RealmePage';
import Login from './login/Login';
import Signup from './login/Signup';
import Dashboard from './DashBoard';
import Forgot from './login/Forgot';
import ResetPassword from './login/ResetPassword';

const routes = [
    {
        path : "/",
        exact : true,
        main : ({location}) => <HomePage location={location} />
    },
    {
        path : "/product-list",
        exact : true,
        main : ({match}) => <ProductListPage match={match}/>
    },
    {
        path : "/shop",
        exact : false,
        main : () => <ShopPage/>
    },
    {
        path : "/about",
        exact : false,
        main : () => <AboutPage />
    },
    {
        path : "/gallery",
        exact : false,
        main : () => <GalleryPage />
    },
    {
        path : "/contact",
        exact : false,
        main : () => <ContactPage />
    },
    {
        path : "/result",
        exact : true,
        main : ({match}) => <ProductSearchPage match={match} />
    },
    {
        path : "/product-group-iphone",
        exact : false,
        main : ({match}) => <IphonePage match={match} />
    },
    {
        path : "/product-group-samsung",
        exact : false,
        main : ({match}) => <SamsungPage match={match} />
    },
    {
        path : "/product-group-blackBerry",
        exact : false,
        main : ({match}) => <BlackBerryPage match={match} />
    },
    {
        path : "/product-group-oppo",
        exact : false,
        main : ({match}) => <OppoPage match={match} />
    },
    {
        path : "/product-group-xiaomi",
        exact : false,
        main : ({match}) => <XiaomiPage match={match} />
    },
    {
        path : "/product-group-realme",
        exact : false,
        main : ({match}) => <RealmePage match={match} />
    },
    {
        path : "/cart",
        exact : true,
        main : ({match}) => <CartPage match={match} />
    },
    {
        path : "/modal-cart",
        exact : false,
        main : () => <ModalCart />
    },
    {
        path : "/login",
        exact : false,
        main : ({location, history}) => <Login location={location} history={history} />
    },
    {
        path : "/register",
        exact : false,
        main : ({location, history}) => <Signup location={location} history={history} />
    },
    {
        path : "/forgot",
        exact : false,
        main : ({location, history}) => <Forgot location={location} history={history} />
    },
    {
        path : "/reset",
        exact : false,
        main : ({match, history}) => <ResetPassword match={match} history={history} />
    },
    {
        path : "/reset/:token",
        exact : true,
        main : ({match, history}) => <ResetPassword match={match} history={history} />
    },
    {
        path : "/dashboard",
        exact : false,
        main : ({location}) => <Dashboard location={location} />
    },
    {
        path : "/:id",
        exact : false,
        main : ({match}) => <ProductDetailPage match={match}/>
    },
    {
        path : "",
        exact : false,
        main : ({location}) => <NotFoundPage location={location} />
    }
];

export default routes;