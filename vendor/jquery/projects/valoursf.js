$(document).ready(function () {

    // design process carousel
    $('#designprocess .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#designprocess .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });

    // solutions
    $('#solutions .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#solutions .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });

});
