import * as productApis from './../apis/product';
import * as Types from './../constants/index';

/*
B1 : fetchProductListRequest --> gọi lên server
B2 : set state về [] trước khi gọi lên server
B3 : fetchProductListSucess ( data response )

*/

export const fetchProductList = () => {
    return {
        type : Types.FETCH_PRODUCTS
    }
}

export const fetchProductListSucess = data => {
    return {
        type : Types.FETCH_PRODUCTS_SUCESS,
        payload : {
            data
        }
    }
}

export const fetchProductListFail = error => {
    return {
        type : Types.FETCH_PRODUCTS_FAIL,
        payload : {
            error
        }
    }
}

export const fetchProductListRequest = () => {
    return dispatch => {
        dispatch(fetchProductList());
        productApis
        .getProductList()
        .then(resp => {
            const {data} = resp;
            dispatch(fetchProductListSucess(data));
        }).catch(error => {
            dispatch(fetchProductListFail(error))
        });
    }
}