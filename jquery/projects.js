$(document).ready(function () {
    $(document).ready(function () {

        // Add smooth scrolling to all links
        $(".projectTOC a").on('click', function (e) {
            // Store hash
            var hash = this.hash;
            var navHeight = $('#topProjectContainer').innerHeight();

            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

            });
        });

        // Add smooth scrolling to navigation
        $('#topProject a').click(function (e) { // Back To Top
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, "slow"
            );
        });

    });
   

    $(window).scroll(function() {
        var y = $(document).scrollTop();
        var headerHeight = $("#projectHeader").innerHeight();

        var docHeight = $(document).outerHeight(true)
        var currentScrollY = y + $(window).innerHeight();
        var footerHeight = $("#projectFooter").innerHeight();
        
        // Show Back to Top after Header
        if (y >= headerHeight) {
            $('#topProject').css('opacity','1');
            $('#topProjectContainer').addClass('addTopStyle');
        } else {
            $('#topProject').css('opacity', '0');
            $('#topProjectContainer').removeClass('addTopStyle');
        }

        // Show Footer
        if (currentScrollY >= docHeight - footerHeight)
        {
            $('body').css('margin-bottom',footerHeight);
            $('#projectFooter').css('display', 'block');
        }
        else
        {
            $('#projectFooter').css('display', 'none');
        }

    });


    // Image Modal
    $(function () {
        $('.projectContentImg').on('click', function () {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('.modal-title').text( $(this).find('figcaption').text() );
            $('#imgModal').modal('show');
        });
    });


});