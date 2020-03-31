$(document).ready(function () {

    // design
    $('#design .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#design .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });

    // scenarios
    $('#scenarios .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#scenarios .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });


});
