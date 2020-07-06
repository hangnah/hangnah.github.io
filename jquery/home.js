// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(document).ready(function () {
    // Hero Text
    var $text = $("#hero-text .hero-text-opacity");
    var $funkytextOne = $("#hero-text #funkyOne")
    var $funkytextTwo = $("#hero-text #funkyTwo")

    // Hero Images
    var $main = $("#hero-img-girl img");
    var $funkyOne = $("#hero-img-pd img");
    var $funkyTwo = $("#hero-img-ja img");

    var $herobg = $("#hero");
    var $navbg = $("#nav");


    $('#funkyOne').mouseenter(function () {
        $main.fadeToggle(350, "swing");
        $funkyOne.fadeToggle(350, "swing")

        $text.animate({ opacity: .5 }, 350);
        $funkytextOne.addClass('funky-opacity');

        $herobg.addClass('herobg');
        $navbg.addClass('herobg');

        $navbg.addClass('navcolor');


    });

    $('#funkyOne').mouseleave(function () {
        $main.fadeToggle(350, "swing");
        $funkyOne.fadeToggle(350, "swing")

        $text.animate({ opacity: 1 }, 350);
        $funkytextOne.removeClass('funky-opacity');

        $herobg.removeClass('herobg');
        $navbg.removeClass('herobg');

        $navbg.removeClass('navcolor');
    });


    $('#funkyTwo').mouseenter(function () {
        $main.fadeToggle(350, "swing");
        $funkyTwo.fadeToggle(350, "swing")

        $text.animate({ opacity: .5 }, 350);
        $funkytextTwo.addClass('funky-opacity');

        $herobg.addClass('herobg');
        $navbg.addClass('herobg');

        $navbg.addClass('navcolor');
    });

    $('#funkyTwo').mouseleave(function () {
        $main.fadeToggle(350, "swing");
        $funkyTwo.fadeToggle(350, "swing")

        $text.animate({ opacity: 1 }, 350);
        $funkytextTwo.removeClass('funky-opacity');

        $herobg.removeClass('herobg');
        $navbg.removeClass('herobg');

        $navbg.removeClass('navcolor');
    });

    // Add smooth scrolling to navigation
    $("#hero a").on('click', function (event) { // Projects

        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, "slow",
        );


    });

    $("#nav a").on('click', function (event) { // Projects

        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, "slow",
        );
    });

});

// Move Hero Images
$(document).ready(function () {
    var heroimg = document.getElementById('hero-img-girl');
    heroimg.homePos = { x: heroimg.offsetLeft, y: heroimg.offsetTop };

    $('#hero').mousemove(function (e) {
        parallax(e, heroimg, 60);
    });

    
});

function parallax(e, target, layer) {
    var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
    var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;

    targetLocation = $(target).offset({ top: y ,left : x });

    $(target).animate({
        'top': targetLocation.top,
        'left': targetLocation.left
  }, 10, "linear");
    //$(target).offset({ top: y ,left : x });
};