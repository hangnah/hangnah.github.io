// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Check if using touchscreen device

$(document).ready(function () {
    // Show Hover Me text
    var $hoverme = $("#hoverme");

    $(document).ready(function () {
        setTimeout(function(){
            $hoverme.addClass('fullOpacity');
        }, 600);
    });

    // Hero Text
    var $text = $("#hero-text .hero-text-opacity");
    var $funkytextOne = $("#hero-text #funkyOne");
    var $funkytextTwo = $("#hero-text #funkyTwo");

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

        $hoverme.removeClass('fullOpacity');

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

        $hoverme.removeClass('fullOpacity');

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

    // About text
    var $aboutFunkyOne = $("#aboutFunkyOne");
    var $aboutFunkyTwo = $("#aboutFunkyTwo");
    var $aboutFunkyThree = $("#aboutFunkyThree");

    // About note
    var $aboutFunkyNoteOne = $("#aboutFunkyNoteOne");
    var $aboutFunkyNoteTwo = $("#aboutFunkyNoteTwo");
    var $aboutFunkyNoteThree = $("#aboutFunkyNoteThree");

    $aboutFunkyOne.mouseenter(function () {
        $aboutFunkyNoteOne.animate({ opacity: 1 }, 350);
    });

    $aboutFunkyOne.mouseleave(function () {
        $aboutFunkyNoteOne.animate({ opacity: 0 }, 350);
    });

    $aboutFunkyTwo.mouseenter(function () {
        $aboutFunkyNoteTwo.animate({ opacity: 1 }, 350);
    });

    $aboutFunkyTwo.mouseleave(function () {
        $aboutFunkyNoteTwo.animate({ opacity: 0 }, 350);
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