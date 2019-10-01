$(document).ready(function () {

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
});
