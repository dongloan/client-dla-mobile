import * as Types from './../constants/index';

var initialState = {};

const ProductInfo = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_PRODUCT_INFO :
            state = action.product;
            return state;
            
        default :
            return state;
    }
}

export default ProductInfo;