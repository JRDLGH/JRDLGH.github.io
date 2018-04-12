$(function(){
    console.log(getSectionsPositions());
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
        if(true){
            // switch(true){
            //     case 1:;
            //     break;
            //     case 2:;
            //     break;
            //     case 3:;
            //     break;
            //     case 4:;
            //     break;
            //     default:;
            // }
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
            var navHeight = 0;
            if(position > 50){
                var navHeight = getHeight($('header')) ? getHeight($('header')): 0;
            }
            if(isMobile()){
                //Close the menu
                $('.menu-icon').click();
            }
            toggleActive($(this));
            $('html, body').animate({
                scrollTop: position - navHeight
            },1000);
        }
    });
});
function getHeight(elem){
    if(elem){
        return elem.outerHeight();
    }
    return 0;
}

function isMobile(){
    var state= false;
    if($('.menu-icon').css('display') == 'block'){
        state = true;
    }
    return state;
}

function toggleActive(link){
    var activeLink = $('header nav #menu li').children('.active');
    if(activeLink.length > 0){
        activeLink.removeClass('active');
    }
    if(!link.hasClass('active')){
        link.addClass('active');
    }
}

function getSectionsPositions(){
    var positions = {};
    var sections = $('section');
    sections.each(function(index){
        if($(sections[index]).attr('id')){
            positions[$(sections[index]).attr('id')] = $(sections[index]).offset
            ().top;
        }
    });
    return positions;
}