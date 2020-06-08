import * as Types from './../constants/index';

var findIndexProduct = (cart, product) => { 
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id){
                index = i;
            } 
        }
    }
    return index;
}

// var initialState = [];

var data = JSON.parse(localStorage.getItem('cart'));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var index = -1;
    var {product, quantity} = action;
    switch(action.type){
        case Types.GET_PRODUCT :
            // console.log(product);
            // console.log(quantity);
        index = findIndexProduct(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            } else {
                state.push({product,quantity})
            }
        // console.log(state);
            localStorage.setItem('cart', JSON.stringify(state))
        return [...state];

        case Types.ADD_BUTTON_CART :
            index = findIndexProduct(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            } else {
                state.push({product,quantity})
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];

        case Types.DELETE_PRODUCT :
            index = findIndexProduct(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];

        case Types.DELETE_COMPLETE_PURCHASE :
            // console.log(action.cart);
            state.splice(0, 100000000);
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];

        default : 
            return [...state];
    }
}

export default cart;


// var initialState = [
//     {
//         product :{
//         id : 1,
//         name : "Iphone XS MAX Style Color",
//         image : "https://image.tinnhanhchungkhoan.vn/400x300/Uploaded/2020/bpikpjik/2019_09_10/iphone11-1_mkmc.jpg",
//         price : 1000,
//         status : true
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 2,
//         name : "Iphone PRO MAX DIAMON",
//         image : "https://www.goldgenie.com/blog/wp-content/uploads/Year-of-the-Rat-Diamond-and-18k-solid-Gold-iPhone-11-Pro-mobile-banner-new-2-2-400x300.jpg",
//         price : 5000,
//         status : false
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 3,
//         name : "Iphone PRO MAX Gold",
//         image : "https://www.goldgenie.com/blog/wp-content/uploads/iPhone11-ICON-400x300.jpg",
//         price : 2000,
//         status : true
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 4,
//         name : "Iphone PRO MAX Grey",
//         image : "https://image.tinnhanhchungkhoan.vn/400x300/Uploaded/2020/gtnwae/2020_02_02/z_mfbt.jpg",
//         price : 1500,
//         status : true
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 5,
//         name : "Iphone 11 Black Edition",
//         image : "https://www.channelnews.com.au/wp-content/uploads/2020/02/20190423001396209587-original-400x300.jpg",
//         price : 900,
//         status : true
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 6,
//         name : "Iphone PRO MAX Glass White",
//         image : "https://image.tinnhanhchungkhoan.vn/400x300/Uploaded/2020/gtnwae/2019_09_11/1/z-6_zhrr.png",
//         price : 1300,
//         status : true
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 7,
//         name : "Samsung 11 Pro Black",
//         image : "https://cdn.businessinsider.de/wp-content/uploads/2019/12/samsung-galaxy-fold-phone-400x300.jpg",
//         price : 1450,
//         status : true
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 8,
//         name : "Samsung Galaxy S20",
//         image : "https://image.tinnhanhchungkhoan.vn/400x300/Uploaded/2020/gtnwae/2020_02_12/1/z-a_klud.jpg",
//         price : 600,
//         status : true
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 9,
//         name : "Samsung Galaxy Note 8 ",
//         image : "https://image.tinnhanhchungkhoan.vn/400x300/Uploaded/2020/gtnwae/2018_02_26/s9_xtks.jpg",
//         price : 550,
//         status : false,
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 10,
//         name : "Galaxy Z Flip ",
//         image : "https://www.channelnews.com.au/wp-content/uploads/2020/02/20200212001448769822-original-400x300.jpg",
//         price : 999,
//         status : false
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 11,
//         name : "Galaxy Note 8 Special ",
//         image : "https://image.tinnhanhchungkhoan.vn/400x300/Uploaded/2020/gtnwae/2018_08_02/zzsamsung_sqmu.jpg",
//         price : 850,
//         status : false
//         },
//         quantity : 1
//     },
//     {
//         product :{
//         id : 12,
//         name : "LG K51S",
//         image : "https://image.tinnhanhchungkhoan.vn/400x300/Uploaded/2020/wpxlcdjwi/2020_02_17/4/1_tepf.jpg",
//         price : 650,
//         status : true
//         },
//         quantity : 1
//     }
// ];