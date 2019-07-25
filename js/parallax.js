$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    $('.parallax').css('background-position', 'center '+(scrollPos*0.35)+'px')
})