/* Prepage Loader */

/* run the prepage loader animation */
$(window).on('load', function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 400);
});

/* initialize scrollspy plugin */
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});