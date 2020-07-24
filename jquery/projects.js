// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).ready(function () {

    // Scroll Indicator
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    // Show Scroll to Top after scroll
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() >= $(
            '#context').offset().top + $('#context').
                outerHeight() - window.innerHeight) {

            $("#scrollTop").addClass('fullOpacity');
        }

        else {
            $("#scrollTop").removeClass('fullOpacity');
        }
    });


    // Scroll to Top
    $("#scrollTop a").on('click', function (event) { // Projects

        event.preventDefault();

        $('html,body').animate({
            scrollTop: 0
        }, "slow",
        );
    });

    // Lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            alwaysShowClose: true,
        });

        var scrollPos = $(document).scrollTop();

        $(document).scroll(function() {
            if ($(document).scrollTop() >= scrollPos || $(document).scrollTop() <= scrollPos ) {
                $('.modal').modal('hide');
            }

        });

       
    });


});