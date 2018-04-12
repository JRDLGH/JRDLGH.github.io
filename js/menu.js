$(function(){
    $('.menu-icon').click(function(){
        $(this).toggleClass('is-opened');
        if($(this).hasClass('is-opened')){
            $('#menu').slideDown();
        }else{
            $('#menu').slideUp();
        }
    });
    $(window).resize(function(){
        if(window.innerWidth >= 1024){
            $('#menu').css('display','flex');
        }else if(window.innerWidth < 1024){
            $('#menu').hide();
            $('.menu-icon').removeClass('is-opened');
        }
    });
});