var modalProduct = document.getElementsByClassName("modal-product-main")[0];

function modalOpen() {
    modalProduct.style.display = "block";
    modalProduct.style.animationName = "modal1";
    modalProduct.style.animationDuration = ".4s";
    modalProduct.style.animationTimingFunction = "linear";
}

function modalClose(){
    modalProduct.style.animationName = "modal-close";
    modalProduct.style.animationDuration = "6s";
    modalProduct.style.animationTimingFunction = "linear";
    setTimeout(close1, 600);
}

modalProduct.onclick = function(event) {   
    if(event.target == modalProduct){
        modalProduct.style.animationName = "modal-close";
        modalProduct.style.animationDuration = "6s";
        modalProduct.style.animationTimingFunction = "linear";
        setTimeout(close1, 600);
    }
}

function close1() {
    modalProduct.style.animationDuration = "6s";
    modalProduct.style.display = "none";   
}

///////////////////////

var modalCart = document.getElementsByClassName("cart-open")[0];
var modalCartOpen = document.getElementsByClassName("modal-cart-main")[0];
modalCart.onclick = function(){
    modalCartOpen.style.display = "block";
    modalCartOpen.style.animationName = "modal-cart1";
    modalCartOpen.style.animationDuration = ".4s";
    modalCartOpen.style.animationTimingFunction = "linear";
}

function closeModalCart() {
    modalCartOpen.style.animationName = "modal-cart-close";
    modalCartOpen.style.animationDuration = "6s";
    modalCartOpen.style.animationTimingFunction = "linear";
    setTimeout(close2, 600);
}

function close2(){   
    modalCartOpen.style.display = "none";
    modalCartOpen.style.animationDuration = "6s";
}

modalCartOpen.onclick = function(event){
    if(event.target == modalCartOpen){
        modalCartOpen.style.animationName = "modal-cart-close";
        modalCartOpen.style.animationDuration = "6s";
        modalCartOpen.style.animationTimingFunction = "linear";
        setTimeout(close2, 600);
    }
}

// search modal
// var search = document.getElementsByClassName("modal-search-main")[0];
// function searchClick() {   
//     if(search.style.display === 'none'){
//         search.style.display = "block";
//         search.style.animationName = "search";
//         search.style.animationDuration = ".5s";
//         search.style.animationTimingFunction = "linear";
//     }else {
//         search.style.animationName = "search-close";
//         search.style.animationDuration = "1s";
//         search.style.animationTimingFunction = "linear";
//         setTimeout(close3, 600);
//     }
// }

// function close3() {
//     search.style.display = "none";
//     search.style.animationDuration = "3s";
// }
var search = document.getElementById("modal-search");
var btnSearchOpen = document.getElementById("btn-search");
var btnSearchClose = document.getElementsByClassName("modal-close")[0];
btnSearchOpen.onclick = function() {
    if(search.style.display == 'none' || search.style.display == ''){
        search.style.display = 'block';
    search.style.animationName = "search";
    search.style.animationDuration = ".5s";
    search.style.animationTimingFunction = "linear";
    }else {
        search.style.animationName = "search-close";
    search.style.animationDuration = ".7s";
    search.style.animationTimingFunction = "linear";
    setTimeout(close3, 600);
    }  
}

// window.addEventListener("click", function(event) {
//     if(event.target == btnSearchOpen){
//         Search.style.display = 'none';
//     }
// })
function close3() {
    search.style.display = 'none';
    search.style.animationDuration = "3s";
}

//index - menu - respon
var menuRes = document.getElementById("menu-second");

function menuClick() {
    console.log('alo');
    if(menuRes.style.display == 'none' || menuRes.style.display == ''){
        menuRes.style.display = 'block';
        menuRes.style.animationName = 'menu-open';
        menuRes.style.animationDuration = '.5s';
        menuRes.style.animationTimingFunction = 'linear';
    } 
    else {
        menuRes.style.animationName = 'menu-close';
        menuRes.style.animationDuration = '.7s';
        menuRes.style.animationTimingFunction = 'linear';
        setTimeout(close4, 700);
    }
}

function close4() {
    menuRes.style.display = 'none';
    menuRes.style.animationDuration = '.7s';
}


