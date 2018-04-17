$(function(){
    $('.accordion div.acc-title').click(function(){
        $(this).parent().toggleClass('is-opened');
        if($(this).parent().hasClass('is-opened')){
            $(this).next('.content').slideDown();
        }else{
            $(this).next('.content').slideUp();
        }
    });
});