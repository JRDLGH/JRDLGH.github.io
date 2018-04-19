$(function(){
    $('.btn-discover.details').click(function(evt){
        evt.preventDefault();
        if($('.slide-details-content').hasClass('is-opened')){
            $('.slide-details-content').removeClass('is-opened');
        }
        console.log($(this.hash).child('.is-opened'));
        if($(this.hash).hasClass('is-opened')){
            console.log('Already opened');
            $('.slide-details-content').removeClass('is-opened');            
        }else{
            $(this.hash).toggleClass('is-opened');
        }
    });
    $('a.btn-download.disabled').click(function(evt){
        return false;
    });
});