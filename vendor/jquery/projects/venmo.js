$(document).ready(function () {

    // survey results
    $('#survey-results .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#survey-results .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });

    $('#infoarch .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#infoarch .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');

    });

    $('#lowfidelity .tabCarousel a').click(function (event) {
        event.preventDefault();
        $('#lowfidelity .tabCarousel a').removeClass('tabActive');
        $(this).addClass('tabActive');
    });
});
