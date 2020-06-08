import * as Types from './../constants/index';

const initialState = {
    pageSize: 0,
    productList : []
};

const products = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_PRODUCTS : {
            return {
                ...state,
                productList : [],
            };
        }

        case Types.FETCH_PRODUCTS_SUCESS : {
            var {data} = action.payload;
            return {
                ...state,
                pageSize: state.pageSize + 10,
                productList : data
            };
        }

        case Types.FETCH_PRODUCTS_FAIL : {
            return {
                ...state,
                productList : [],
            };
        }

        default : 
            return state;
    }
}

export default products;

