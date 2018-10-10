/* =================================
------------------------------------
	Cryptocurrency - Landing Page Template
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
  /*------------------
		Smooth scroll to anchors
	--------------------*/
  $(document).on('click', 'a[href^="#"]:not([role="tab"])', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });

	/*------------------
		Navigation
	--------------------*/
	$('.responsive-bar').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Review
	--------------------*/
	var review_meta = $(".review-meta-slider");
    var review_text = $(".review-text-slider");


    review_text.on('changed.owl.carousel', function(event) {
		review_meta.trigger('next.owl.carousel');
	});

	review_meta.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 3,
		center: true,
		margin: 20,
		autoplay: true,
		mouseDrag: false,
	});


	review_text.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		margin: 20,
		autoplay: true,
		navText: ['<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>'],
		animateOut: 'fadeOutDown',
    	animateIn: 'fadeInDown',
	});



	 /*------------------
		Contact Form
	--------------------*/
    $(".check-form").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".check-form").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });



})(jQuery);

$( document ).ready(function() {

  // logo animation
  var pointpath_1 = anime.path("#pointpath_1")
  var pointpath_2 = anime.path("#pointpath_2")
  var pointpath_3 = anime.path("#pointpath_3")
  var logoAnimation = anime.timeline({
    // direction: 'alternate',
    // loop: 3,
    autoplay: false
  });
  logoAnimation
    .add({
      targets: '#logo #flow-stroke path, #logo #flow path, #logo #flow-path-out path',
      opacity: 0,
      duration: 1,
    })
    .add({
      targets: '#logo #point',
      opacity:1,
      duration: 200,
      delay:1000
    })
    .add({
      targets: '#logo #point',
      translateX: pointpath_1('x'),
      translateY: pointpath_1('y'),
      rotate: pointpath_1('angle'),
      easing: 'easeInOutExpo',
      duration: 800,
    })
    .add({
      targets: '#logo #point',
      opacity:0,
      duration: 1,
    })
    .add({
      targets: '#logo #flow-path-in path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 200,
      delay: function(el, i) { return i * 50 },
      offset:"-=300"
    })
    .add({
      targets: '#logo #point',
      opacity:1,
      duration: 1,
    })
    .add({
      targets: '#logo #point',
      translateX: pointpath_2('x'),
      translateY: pointpath_2('y'),
      rotate: pointpath_2('angle'),
      easing: 'easeOutExpo',
      duration: 300,
    })
    .add({
      targets: '#logo #point',
      translateX: pointpath_3('x'),
      translateY: pointpath_3('y'),
      rotate: pointpath_3('angle'),
      easing: 'easeInExpo',
      duration: 300,
    })
    .add({
      targets: '#logo #point',
      opacity:0,
      duration: 1,
    })
    .add({
      targets: '#logo #flow-path-out path',
      opacity: 1,
      duration: 1,
    })
    .add({
      targets: '#logo #flow-path-in path',
      opacity: 0,
      duration: 1,
    })
    .add({
      targets: '#logo #flow-path-out path',
      strokeDashoffset: [0,anime.setDashoffset],
      easing: 'easeInOutSine',
      duration: 200,
      delay: function(el, i) { return i * 50 },
    })
    .add({
      targets: '#logo #flow-path-out path',
      opacity: 0,
      duration: 1,
    })
    .add({
      targets: '#logo #flow-stroke path',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 500,
      delay: function(el, i) { return i * 200 },
      offset:"-=500"
    })
    .add({
      targets: '#logo #flow-stroke path',
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 500,
      delay: function(el, i) { return i * 200 },
    }).add({
      targets: '#logo #flow path',
      opacity: 1,
      duration: 3000,
      delay: function(el, i) { return i * 100 },
      offset:"-=1500"
    })
    .add({
      targets: '#logo #flow-stroke path',
      opacity: 0,
      duration: 2000,
      offset:"-=3000"
    })
    .add({
      targets: '#logo #fingers path',
      scale:[1.5,1],
      opacity: [0,1],
      duration: 1000,
      offset:"-=2500"
    })
    .add({
      targets: '#logo #play',
      scale:[1.5,1],
      opacity: [0,1],
      duration: 700,
      offset:"-=2700",
      easing: 'easeInOutElastic',
    })
    .add({
      targets: '#logo #O, #logo #fingers',
      rotate:[0,-20],
      scale:[1,0.8],
      duration: 400,
      offset:"-=1000",
      easing:'easeInOutQuad',
    })
    .add({
      targets: '#logo #O, #logo #fingers',
      rotate:[-20, 0],
      scale:[0.8, 1],
      duration: 1000,
      offset:"-=500",
      easing:'easeOutElastic',
      elasticity: 700
    })

  logoAnimation.play()

})
