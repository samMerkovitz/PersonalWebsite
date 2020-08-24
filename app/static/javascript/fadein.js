
$(document).ready(function(){

    /*! Fades in page on load */
    $('.welcome-header').css('display', 'none');
    $('.welcome-header').fadeIn(2000);

    $('.scrolldown').css('display', 'none');
    $('.scrolldown').fadeIn(6000);

    $('.nav-menu').css('display', 'none');
    $('.nav-menu').fadeIn(6000);
    
});

$(window).scroll(function() {
    $('.fade-in').each(function() {


        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
            $('.scrolldown').fadeOut(2000);
        }
    });
});
