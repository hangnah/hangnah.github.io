$(document).ready(function () {
    // Show "Digital Designer" on hover
    $('#header-h').hover(function () {
        $('#header-h-text').fadeToggle();
    });

    // Show Back To Top on scroll
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var winHeight = $(this).innerHeight();
        if (y >= winHeight) {
            $('#back').fadeIn(700);
        } else {
            $('#back').fadeOut(700);
        }
    });

    // Scroll Back To Top
    $("#back").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // Show Category on scroll
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var winHeight = $(this).innerHeight();
        if (y >= winHeight) {
            $('#category').fadeIn(700);
        } else {
            $('#category').fadeOut(700);
        }
    });

    // Show funky images when hover
    $('#funky-header-text').hover(function () {
        $('#funky-baby').fadeToggle();
    });
    $('#funky-text-1').hover(function () {
        $('#funky-1').fadeToggle();
    });
    $('#funky-text-2').hover(function () {
        $('#funky-2').fadeToggle();
    });
    $('#funky-text-3').hover(function () {
        $('#funky-3').fadeToggle();
    });

    // smooth scroll
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {
            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

            });
        });
    });

    // inview
    $('#case-studies').on('inview', function (event, isInView) {
        if (isInView) {
            $('#cat_cs').addClass('active');
            $('#cat_v').removeClass('active');
            $('#cat_d').removeClass('active');
        }
    });

    $('#visual').on('inview', function (event, isInView) {
        if (isInView) {
            $('#cat_cs').removeClass('active');
            $('#cat_v').addClass('active');
            $('#cat_d').removeClass('active');
        }
    });

    $('#digital').on('inview', function (event, isInView) {
        if (isInView) {
            $('#cat_cs').removeClass('active');
            $('#cat_v').removeClass('active');
            $('#cat_d').addClass('active');
        }
    });

});