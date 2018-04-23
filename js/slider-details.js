$(function(){
    $('.btn-discover.details').click(function(evt){
        evt.preventDefault();
        console.log($('.slide-details-content.is-opened'));
        console.log($(this.hash));
        console.log($('.slide-details-content.is-opened')[0] == $(this.hash)[0]);
        if($('.slide-details-content.is-opened')[0] == $(this.hash)[0]){
            $('.slide-details-content.is-opened').removeClass('is-opened');
        }else if($('.slide-details-content').hasClass('is-opened')){
            $('.slide-details-content').removeClass('is-opened');
            $(this.hash).toggleClass('is-opened');
        }
        else{
            $(this.hash).toggleClass('is-opened');
        }
    });
    $('a.btn-download.disabled').click(function(evt){
        return false;
    });
});