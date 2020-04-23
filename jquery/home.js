// Viewport stuff
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function () {


    // // Always start at top
    // $('html,body').scrollTop(0);

    // Check if in viewport


    // Hero
    $('.heroDisclaimer a').click(function (e) {
        e.preventDefault();
    });

    $("#heroOneNext").click(function () {
        $(this).closest(".heroContainer").animate(
            { width: 0 }, 450,
            function () {
                $(".heroContainer #heroOne").css("z-index", "-1");
            }
        );
    });

    $("#heroTwoBack").click(function () {
        $(".heroContainer #heroOne").css("z-index", "9999");
        $(".heroContainer").animate(
            { width: "100vw" }, 450
        );
    });

    // Funky Images
    var $funkyOne = $("#funkyOne");
    var $funkyTwo = $("#funkyTwo");
    var $funkyThree = $("#funkyThree");

    $('#funkyItemOne').hover(function () {
        $funkyOne.fadeToggle(400, "linear")
        $funkyOne.css('z-index', '999999');
    });
    $('#funkyItemTwo').hover(function () {
        $funkyTwo.fadeToggle(400, "linear")
    });
    $('#funkyItemThree').hover(function () {
        $funkyThree.fadeToggle(400, "linear")
    });

    // Add smooth scrolling to navigation
    $('#topHomeContainer a').click(function (e) { // Back To Top
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, "slow"
        );

        $('#projects').animate({
            scrollTop: 0
        }, "slow"
        );
    });

    $(".heroProjects a").on('click', function (event) { // Projects

        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, "slow",
        );


    });

    $(".heroProjectsDisclaimer").on('click', function (event) { // Projects
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, "slow",
        );

    });

    $('body,html').scroll(function() {

        // Add Overflow behavior to projects
        var y = $(this).scrollTop();
        var winHeight = ("$hero").innerHeight();
        //var winHeight = $(this).innerHeight();

        if (y >= winHeight) {
            $('#projects').css('overflow-y', 'scroll');
            $('#topHomeContainer').css('opacity', '1');
        } else {
            $('#projects').css('overflow-y', 'hidden');
            $('#topHomeContainer').css('opacity', '0');
        }

    });
});