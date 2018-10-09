$(document).ready(function(){
    // menu mobile 展開
    $('.menu-icon').click(function(){
        if( $('.menu-wrap-m').hasClass('menu-active') ){
            $('.menu-sub-m').removeClass('menu-active'); // 第二階選單隱藏
            $('.menu-wrap-m').removeClass('menu-active');
        }else{
            $('.menu-wrap-m').addClass('menu-active');
        }
    });

    // menu mobile 第二階展開
    $('.menu-fst-m').click(function(){
        if( $(this).next('.menu-sub-m').hasClass('menu-active') ){
            $(this).next('.menu-sub-m').removeClass('menu-active');
        }else{
            $('.menu-sub-m').removeClass('menu-active'); // 隱藏其他第二階選單
            $(this).next('.menu-sub-m').addClass('menu-active');
        }
    });

    
    if($(window).width() > 768){
        // menu fixed add class
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 71) {
                $("nav").addClass("nav-fixed");
            }else{
                $("nav").removeClass("nav-fixed");
            }
        });
    }
});

