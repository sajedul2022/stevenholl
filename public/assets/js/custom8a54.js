jQuery(document).ready(function($)
{
	//header
    $('#show-hidden-menu').click(function() {
    //   $('.menu-item').slideToggle("slow");
	  $('#homepagemenu').slideToggle("slow");
    });
	

	//Home Slider
	$('.fullscreenslider .owl-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		slideSpeed: 300,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.ecologicalInnovationSec .owl-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		slideSpeed: 300,
		dots: false,
		responsive: {
			0: {
				items: 1,
				autoHeight: true
			},
			768: {
				items: 1,
				autoHeight: true
			},
			1000: {
				items: 1,
				autoHeight: true
			},
			1025: {
				items: 1,
				autoHeight: false
			}
		}
	});

	$('.defaultSlider.owl-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		nav: true,
		slideSpeed: 300,
		dots: true,
		//singleItem : true,
        autoHeight : true,
		responsive: {
			0: {
				items: 1,
				//autoHeight: true
			},
			768: {
				items: 1,
				//autoHeight: true
			},
			1000: {
				items: 1,
				//autoHeight: true
			},
			1279: {
				items: 1,
				//autoHeight: false
			}
		}
	});

	// Home Mobile Slider
	$('#home-slider.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		slideSpeed: 300,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});

//for active class
// 	$(".sub-nav,.world-map").on('click','li',function(){
// 		$(this).addClass("active");  // adding active class
//    });

//Div toggle
 $('.togglelist h2.toggle').on('click', function(e){
	e.preventDefault();
	$(this).parent('.togglelist').toggleClass("active");
	$(this).parent().find('.innerContentSec').slideToggle();
	//if($(this).parent('.togglelist').hasClass("active")){
	//	$('span.toggle__plus strong').text('-');
	//}else{
	//	$('span.toggle__plus strong').text('+');
	//}
	$(this).find('span.toggle__plus strong').text(function(i, v){
		return v === '+' ? '-' : '+'
	 })
  });

  //Mobile Menu
//   $('.menu-mobile-menu-container ul#primary-menu li.menu-item-has-children').prepend('<span class="rightarrow"></span>');
//   $('.menu-mobile-menu-chinese-simplified-container ul#primary-menu li.menu-item-has-children').prepend('<span class="rightarrow"></span>');
//   $('button.menu-toggle').on('click', function(e){
//     e.preventDefault();
// 	$(this).parent('nav#site-navigation').toggleClass("toggled");
// 	$('.menu-mobile-menu-container ul#primary-menu').toggleClass("nav-menu");
// 	$('.menu-mobile-menu-chinese-simplified-container ul#primary-menu').toggleClass("nav-menu");
//   });

//   $('.menu-item-has-children > span.rightarrow').on('click', function(){
// 	if($(this).parent().hasClass('focus')){
// 		$('.menu-item-has-children').removeClass("focus");
// 		$(this).parent('.menu-item-has-children').removeClass("focus");
// 	} else{
// 		$('.menu-item-has-children').removeClass("focus");
// 		$(this).parent('.menu-item-has-children').addClass("focus");
// 	}
//   });

  //add class by image size
  var imgs = $('.project-image'); //jQuery class selector
 
    imgs.each(function() {
        var img = $(this);
        // check project image size
        var image_url = $(this).css('background-image'),
            image;
			//alert('aaa');
        // Remove url() or in case of Chrome url("")
        image_url = image_url.match(/^url\("?(.+?)"?\)$/);

        if (image_url[1]) {
            image_url = image_url[1];
            image = new Image();

            // just in case it is not already loaded
            $(image).load(function() {
                if (image.width >= 1500) {
                    img.addClass('landscape');
                }
                else if (image.height >= 999) {
                    img.addClass('portrait-bleed');
                }
                else if (image.width >= 750) {
                    img.addClass('water-color');
                }
            });

            image.src = image_url;
        }
    });

	// PROJECT SLIDER CODE
	// next slide function
    $('.project__slider-image').click(function(e) {
        var $this = $(this);
        $this.toggle().removeClass('active'); // toggle the display for this item
        var $next = $this.next(); // set the var for our next item
        if ($next.length == 0) { // if no next item, go back to one
            $('.project__slider-image').first().toggle().addClass('active');
        }
        else {
            $next.toggle().addClass('active'); // toggle the display for the next item
        }
    });

    $('.project__slider-next').click(function() {
        $('.project__slider-image.active').trigger('click');
    });

    $('.project__slider-prev').click(function() {

        $next = $('.project__slider-image.active').prev(); // set the var for our next item

        $('.project__slider-image.active').toggle().removeClass('active');

        if ($next.length == 0) { // if no next item, go back to one
            $('.project__slider-image').last().toggle().addClass('active');
        }
        else {
            $next.toggle().addClass('active'); // toggle the display for the next item
        }

    });

	/* Mobile Menu */

    // $(function () {
    //     $('nav#site-navigation').mmenu({
    //         clone: false
    //     });
    //     var API = $("nav#site-navigation").data("mmenu");
    //     $('.mm-btn.close').click(function (e) {
    //         e.preventDefault();
    //         API.close();
    //     });

    //     $("nav#site-navigation").mmenu({
    //         clone: !1, 
	// 		"offCanvas": {
	// 			"position": "top"
	// 		 },
    //     });
    //     var t = $("nav#site-navigation").data("mmenu");
    //     $(".mm-title").after('<a class="mm-btn close" href="#" ></a>'), $(".mm-btn.close").click(function (e) {
    //         e.preventDefault(), t.close()
    //     })
	// 	$('a.mm-title').html('STEVEN HOLL ARCHITECTS');
    // });
    
	//new Mmenu(document.querySelector("#site-navigation"));
	var myscreenheight = screen.height;
	var bheight = (myscreenheight/100)*30;
	//alert(myscreenheight);
	// $('ul.dl-submenu').css("height", myscreenheight - bheight);
    // $(function() {
	// 	// $( '#dl-menu' ).dlmenu({
	// 	// 	animationClasses : { classin : 'dl-animate-in-5', classout : 'dl-animate-out-5' }
	// 	// });
	// 	$( '#dl-menu' ).dlmenu();
	// });
	
	


 });