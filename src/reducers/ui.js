import * as Types from './../constants/ui';

const initialState = {
    showLoading : false
};

const appReducers = (state = initialState, action) => {
    switch(action.type){
        case Types.SHOW_LOADING : {
            return {
                ...state,
                showLoading : true
            };
        }

        case Types.HIDE_LOADING : {
            return {
                ...state,
                showLoading : false
            };
        }
        
        default :
            return state;
    }
};


export default appReducers;