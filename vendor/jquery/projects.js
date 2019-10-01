$(document).ready(function () {
    // fulcrum labs
    $('#design1 .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#design1 .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });

    $('#usertesting .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#usertesting .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });

    $('#design2 .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#design2 .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });

    // Add smooth scrolling to all links
    $("#overview-nav a").on('click', function (event) {
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 500);
    });
});
