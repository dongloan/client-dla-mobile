import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as Types from './../constants/index';
import { getProductList } from './../apis/product';
import {STATUS_CODE} from './../constants/index';
import { fetchProductListSucess, fetchProductListFail } from './../actions/product';
import {showLoading, hideLoading} from './../actions/ui';

function* watchFetchProductListAction() {
    while(true){
        yield take(Types.FETCH_PRODUCTS);   // chờ đến khi nào dispatch thành công thì mới thực thi câu lệnh dưới
        yield put(showLoading());
        const resp = yield call(getProductList);
        const {status, data} = resp;
        if(status === STATUS_CODE.SUCESS){
            // dispatch action : fetchProductListSucess
            yield put(fetchProductListSucess(data));
        }else {
            // // dispatch action : fetchProductListFail
            yield put(fetchProductListFail(data));
        }
        yield delay(400);
        yield put(hideLoading());
    }
}

function* rootSaga() {
    yield fork(watchFetchProductListAction);
}

export default rootSaga;