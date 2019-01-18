$(document).ready(function () {

    /* hide bar on load */
    $('#nav-mobile').hide();

    /* show nav bar when smol */
    $(document).scroll(function () {
        var y = $(this).scrollTop();

        var winWidth = $(window).innerWidth();
        var winHeight = $(window).innerHeight();

        if (y > winHeight && winWidth <= 768 ) {

            $('#nav-mobile').fadeIn(300);
        } else {
            $('#nav-mobile').fadeOut(300);
        }
    });

    /* show funky images when hover */
    $('#funky-header-text').hover(function(){
        $('#funky-baby').fadeToggle();
    });
    $('#funky-text-1').hover(function() {
        $('#funky-1').fadeToggle();
    });
    $('#funky-text-2').hover(function() {
        $('#funky-2').fadeToggle();
    });
    $('#funky-text-3').hover(function() {
        $('#funky-3').fadeToggle();
    });

    /* smooth scroll */
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
      
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });


      /* FLICKITY */
      $('.projects-slide').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });
    /* change button colors */
    $(window).scroll(function () {

        $.scrollTo = $.fn.scrollTo = function (x, y, options) {
            if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
            options = $.extend({}, {
                gap: {
                    x: 0,
                    y: 0
                },
                animation: {
                    easing: 'swing',
                    duration: 800
                }
            }, options);
            return this.each(function () {
                var elem = $(this);
                elem.stop().animate({
                    scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
                    scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
                }, options.animation);
            });
        };
        var aChildren = $("nav li").children();
        var aArray = [];
        for (var i = 0; i < aChildren.length; i++) {
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }
        $(window).scroll(function () {
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top;
                var divHeight = $(theID).height();
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("btn-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("btn-active");
                }
            }
            if (windowPos + windowHeight == docHeight) {
                if (!$("nav li:last-child a").hasClass("btn-active")) {
                    var navActiveCurrent = $(".btn-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("btn-active");
                    $("nav li:last-child a").addClass("btn-active");
                }
            }
        });

        $("nav a").click(function (evn) {
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash);
        });
    });

    /* images */
    $('.lightbox_trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
        var image_src = $(this).attr("src");
		
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html('<img src="' + image_src + '" />');
		   	
			//show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
            
            // center
            $('#lightbox').css("display","grid");
            $('#lightbox').css("align-items","center");
		}
		
	});
	
    //Click anywhere on the page to get rid of lightbox window
    $(document).on("click", "#lightbox",function() { 
		$('#lightbox').hide();
	});

});