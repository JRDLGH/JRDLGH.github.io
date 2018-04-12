$(function(){
    var anchorAnimate = false;
    $('.menu-icon').click(function(){
        $(this).toggleClass('is-opened');
        if($(this).hasClass('is-opened')){
            $('#menu').slideDown();
        }else{
            $('#menu').slideUp();
        }
    });
    $(window).scroll(function(evt){
        if(!$('header').hasClass('fixed')){
            $('header').addClass('fixed');
        }
        if(($('html').offset().top + 40) > $('html').scrollTop()){
            $('header').removeClass('fixed');
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
    $('.anchor').click(function(evt){
        evt.preventDefault();
        if(!$(evt.target.hash).is(':animated')){
            var position = $(this.hash).offset().top;
            if(isMobile()){
                //Close the menu
                $('.menu-icon').click();
            }
            toggleActive($(this));
            $('html, body').animate({
                scrollTop: position
            },1000);
        }
    })
});

function isMobile(){
    var state= false;
    if($('.menu-icon').css('display') == 'block'){
        state = true;
    }
    return state;
}
function toggleActive(link){
    var activeLink = $('header nav #menu li').children('.active');
    console.log(activeLink);
    if(activeLink.length > 0){
        console.log("Active link present and removed");
        activeLink.removeClass('active');
    }
    if(!link.hasClass('active')){
        link.addClass('active');
    }
}