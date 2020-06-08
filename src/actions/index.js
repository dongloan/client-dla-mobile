import * as Types from './../constants/index';
import callApi from './../utils/apiCaller';

// export const actFetchProductsRequest = () => {
//     return dispatch => {
//         return callApi('dlamobiles', 'GET', null).then(res => {
//             dispatch(actFetchProducts(res.data))
//         });
//     }
// }

// export const actFetchProducts = (products) => {
//     return {
//         type : Types.FETCH_PRODUCTS,
//         products
//     }
// }

//

export const actGetProductRequest = (id) => {
    return dispatch => {
        callApi(`dlamobiles/${id}`, 'GET', null).then(res =>{
            // console.log(res);
            dispatch(actGetProduct(res.data, 1))        // quan trọng ----------> quan trọng
        });
    }
}

export const actGetProduct = (product, quantity) => {
    return {
        type : Types.GET_PRODUCT,
        product,
        quantity
    }
}

export const actAddButtonToCart = (product, quantity) => {
    return {
        type : Types.ADD_BUTTON_CART,
        product,
        quantity
    }
}

export const actDeleteProduct = (product) => {
    return {
        type : Types.DELETE_PRODUCT,
        product
    }
}

export const actDeleteAllProductPurcharse = (cart) => {
    return {
        type : Types.DELETE_COMPLETE_PURCHASE,
        cart
    }
}

export const actFetchJobsRequest = () => {
    return dispatch => {
        return callApi('job', 'GET', null).then(res => {
            dispatch(actFetchJobs(res.data))
        });
    }
}

export const actFetchJobs = (jobs) => {
    return {
        type : Types.FETCH_JOBS,
        jobs
    }
}

export const actGetJobInfo = (job) => {
    return {
        type : Types.GET_JOBINFO,
        job
    }
}

export const actGetJobInfoRequest = (job) => {
    return dispatch => {
        return callApi(`job/${job.id}`, 'GET', null).then(res => {
            dispatch(actGetJobInfo(res.data))
        });
    }
}

export const actGetUrlJob = (job) => {          // job này là res.data của server trả về
    return {
        type : Types.GET_URL_JOB,
        job
    }
}

export const actGetUrlJobRequest = (id) => {        // id này là của jobInfo.id
    return dispatch => {
        return callApi(`job/${id}`, 'GET', null).then(res => {
            dispatch(actGetUrlJob(res.data))
            });
    }
}

export const actGetProductNameStore = (keyword) => {
    // console.log(keyword);
    return {
        type : Types.GET_PRODUCT_NAME_STORE,
        keyword
    }
    
}

// export const actGetProductNameRequest = (name) => {
//     return dispatch => {
//         return callApi(`job/${name}`, 'GET', null).then(res => {
//             dispatch(actGetProductName(res.data))
//         });
//     }
   
// }

export const actKeywordSearchJob = (keywordJob) => {
    return {
        type : Types.KEYWORD_SEARCH_JOB,
        keywordJob
    }
}

export const actGetProductInfo = (product) => {
    return {
        type : Types.GET_PRODUCT_INFO,
        product
    }
}

// export const actGetProductInfoAlways = (product) => {
//     return {
//         type : Types.GET_PRODUCT_INFO_ALWAYS,
//         product
//     }
// }