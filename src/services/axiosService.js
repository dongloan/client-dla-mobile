import axios from 'axios';

class AxiosService {
    constructor(){      // hàm khởi tạo class hay component
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSucess, this.handleError);    // thành công hay thất bại
        this.instance = instance;
    }

    handleSucess(response){
        return response;
    }

    handleError(error){
        return Promise.reject(error);
    }

    get(url){
        return this.instance.get(url);
    }
}

export default new AxiosService();

// Khái niệm mới xử lí thành công hay thất bại
// instance.interceptors.response.use()