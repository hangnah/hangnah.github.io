// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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

    $(".heroProjectsAbout").on('click', function (event) { // Projects
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, "slow", function () {
            $('#projects').animate({
                scrollTop: $(hash).offset().top
            }, "slow",
            );
        }
        );


        console.log('should work')

    });

    // $('.nav-pills li a').click(function () { // Projects
    //     var hash = "#projects";
    //     // Scroll to projects
    //     $('html,body').animate({
    //         scrollTop: $(hash).offset().top
    //     }, "slow"
    //     );

    //     var href = $(this).attr('href');

    //     //set all nav tabs to inactive
    //     $('.nav-pills li a').removeClass('active').attr("aria-selected","false");

    //     //get all nav tabs matching the href and set to active
    //     $('.nav-pills li a[href="' + href + '"]').closest('a').addClass('active').attr("aria-selected","true");

    //     //active tab
    //     $('.tab-pane').removeClass('active').removeClass('show');
    //     $('.tab-pane' + href).addClass('active').addClass('show');

    // });

});