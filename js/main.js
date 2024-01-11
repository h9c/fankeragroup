$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $('header').addClass('header-bg')
        }   else if($('header-bg').hasClass('header-bg')){
            $('header').removeClass('header-bg')
        }
    });
    footer_height();
})

function footer_height() {
    $('footer').css('height', $('.relative-content').height());
}


