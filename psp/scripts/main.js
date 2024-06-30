$(document).ready(function() {
    // Smooth scroll to sections
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Hide the loading animation on page load
    $(window).on('load', function() {
        $('#loading').fadeOut('slow');
    });
});
