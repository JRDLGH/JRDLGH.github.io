$(function(){
    $('.btn-discover.details').click(function(evt){
        evt.preventDefault();
        if($('.slide-details-content').hasClass('is-opened')){
            $('.slide-details-content').removeClass('is-opened');
        }
        $(this.hash).toggleClass('is-opened');
    });
    $('a.btn-download.disabled').click(function(evt){
        return false;
    });
});