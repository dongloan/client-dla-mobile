import * as uiTypes from './../constants/ui';

export const showLoading = () => ({         // return về object ta viết như vậy cho ngắn gọn
    type : uiTypes.SHOW_LOADING
});

export const hideLoading = () => ({         // return về object ta viết như vậy cho ngắn gọn
    type : uiTypes.HIDE_LOADING
})