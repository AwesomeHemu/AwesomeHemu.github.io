var scrollfir = $(window).scrollTop();
$('.parallax').css('background-position', 'center '+(scrollfir*0.35)+'px')

$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    $('.parallax').css('background-position', 'center '+(scrollPos*0.35)+'px')
})