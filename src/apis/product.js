import {API_URL} from './../constants/config';
import axiosService from './../services/axiosService';

const url = "dlamobiles";

export const getProductList = () => {
    return axiosService.get(`${API_URL}/${url}`);
}