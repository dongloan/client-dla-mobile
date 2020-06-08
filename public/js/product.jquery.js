
$(document).ready(function() {
    $(window).scroll(function(event){
        var pos_body = $('html,body').scrollTop();
        var pos_menu_top = $('.header-top__sub').offset().top;
        // console.log(pos_menu_top);
        // index
        if(pos_menu_top > 80){
            $('.header-top__sub').addClass('background-header-top-fixed');
        }else{
            $('.header-top__sub').removeClass('background-header-top-fixed');
        }

        //// product
        var pos_menu_top_product = $('.header-top').offset().top;
        console.log(pos_menu_top);

        if(pos_menu_top_product > 80){
            $('.header-top').addClass('background-header-top-fixed');
        }else{
            $('.header-top').removeClass('background-header-top-fixed');
        }
    })
})

