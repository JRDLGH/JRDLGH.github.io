$(function(){
    $('.btn-discover.details').click(function(evt){
        evt.preventDefault();
        $(this.hash).toggleClass('is-opened');
    });
});