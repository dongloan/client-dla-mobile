import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import productInfo from './productInfo';
import searchProduct from './searchProduct';
import ui from './ui';
import loginUser from './loginUser';

const appReducers = combineReducers ({
    products,
    productInfo,
    cart,
    searchProduct,
    ui,
    loginUser
});

export default appReducers;


// import { combineReducers } from 'redux';
// import products from './products';
// import cart from './cart';
// import jobs from './job';
// import jobInfo from './jobInfo';
// import productInfo from './productInfo';
// import searchProduct from './searchProduct';
// import keywordSearchJob from './keywordSearchJob';
// import uiReducer from './ui';
// import loginUser from './loginUser';

// const appReducers = combineReducers ({
//     products,
//     productInfo,
//     cart,
//     jobs,
//     jobInfo,
//     searchProduct,
//     keywordSearchJob,
//     ui : uiReducer,
//     loginUser
// });

// export default appReducers;