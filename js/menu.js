$(function(){
    initPage();
    setCurrentSection($('html').scrollTop());
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
        setFixedHeader();
        setCurrentSection($('html').scrollTop());
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
        navigate(this,evt);
    });
    $('#intro .btn-discover').click(function(evt){
        evt.preventDefault();
        navigate(this,evt);
    });
});

function navigate(link,evt){
    if(!$(evt.target.hash).is(':animated')){
        var position = $(link.hash).offset().top;
        var navHeight = 0;
        if(position > 50){
            var navHeight = getHeight($('header')) ? getHeight($('header')): 0;
        }
        if(isMobile()){
            //Close the menu
            closeMenu();
        }
        toggleActive($(link));
        $('html, body').animate({
            scrollTop: position+1 - navHeight
        },1000);
    }
}

function closeMenu(){
    if($('.menu-icon').hasClass('is-opened')){
        $('#menu').slideUp();
        $('.menu-icon').removeClass('is-opened');
    }
}
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

function setCurrentSection(wPosition){
    if(!wPosition){
        wPosition = 0;
    }
    wPosition += getHeight($('header'));
    var ob = getSectionsPositions();
    var keys = Object.keys(ob);

    keys.forEach(function(key,index)
    {
        if(key == keys[0]){
            if(wPosition >= ob[key] && wPosition < ob[keys[index+1]]){
                setSectionLinkActive(key);
            }
        }else if(ob[keys[index+1]]){
            //if inside our current section then active the link
            if(wPosition >= ob[key] && wPosition < ob[keys[index+1]]){
                setSectionLinkActive(key);
            }
        }else if(key == keys[keys.length-1]){
            if(wPosition >= ob[key] && wPosition > ob[keys[index-1]]){
                setSectionLinkActive(key);
            }
        }
    });
}

function setSectionLinkActive(section){
    if(!$('.main-nav-links[href*="#'+ section +'"]').hasClass('active')){
        toggleActive($('.main-nav-links[href*="#'+ section +'"]'));    
    }
}

function initPage(){
    if($('html').scrollTop() > 50){
        setFixedHeader();
    }
}

function setFixedHeader()
{
    if(!$('header').hasClass('fixed')){
        $('header').addClass('fixed');
    }
    if(($('html').offset().top + 40) > $('html').scrollTop()){
        $('header').removeClass('fixed');
    }
}
