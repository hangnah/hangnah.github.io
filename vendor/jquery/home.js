$(document).ready(function () {
    // Show "Digital Designer" on hover
    $('#nav-title img').hover(function () {
        $('#nav-title-text').fadeToggle();
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

    // About Image
    var $cap1 = $("#aboutcap-1");
    var $cap2 = $("#aboutcap-2");
    var $cap3 = $("#aboutcap-3");
    var $cap4 = $("#aboutcap-4");
    var $cap5 = $("#aboutcap-5");
    var $cap6 = $("#aboutcap-6");

    $cap1.hide();
    $cap2.hide();
    $cap3.hide();
    $cap4.hide();
    $cap5.hide();
    $cap6.hide();

    // 1
    $('#about-1').mousemove(function (e) {
        $cap1.stop(1, 1).fadeIn();
        $cap1.offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        });
    }).mouseleave(function () {
        $cap1.fadeOut();
    });

     // 2
     $('#about-2').mousemove(function (e) {
        $cap2.stop(1, 1).fadeIn();
        $cap2.offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        });
    }).mouseleave(function () {
        $cap2.fadeOut();
    });

    // 3
    $('#about-3').mousemove(function (e) {
        $cap3.stop(1, 1).fadeIn();
        $cap3.offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        });
    }).mouseleave(function () {
        $cap3.fadeOut();
    });

    // 4
    $('#about-4').mousemove(function (e) {
        $cap4.stop(1, 1).fadeIn();
        $cap4.offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        });
    }).mouseleave(function () {
        $cap4.fadeOut();
    });
    
    // 5
     $('#about-5').mousemove(function (e) {
        $cap5.stop(1, 1).fadeIn();
        $cap5.offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        });
    }).mouseleave(function () {
        $cap5.fadeOut();
    });

     // 6
     $('#about-6').mousemove(function (e) {
        $cap6.stop(1, 1).fadeIn();
        $cap6.offset({
            top: e.pageY + 15,
            left: e.pageX + 15
        });
    }).mouseleave(function () {
        $cap6.fadeOut();
    });

});