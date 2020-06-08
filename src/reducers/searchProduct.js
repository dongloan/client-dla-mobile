import * as Types from './../constants/index';

var initialState = ''; // ngầm hiểu keyword : ''

var searchProduct = (state = initialState, action) => {
	switch(action.type){
		case Types.GET_PRODUCT_NAME_STORE :
            // console.log(action);
            // console.log(state);
			return action.keyword;
			
		default :
			return state;
	}
}

export default searchProduct;