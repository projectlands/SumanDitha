;
(function () {

	'use strict';

	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-fh5co-nav-toggle').removeClass('active');
				}
			}
		});

	};


	var offcanvasMenu = function () {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function () {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-fh5co-nav-toggle').removeClass('active');

			}
		});
	};


	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {
			var $this = $(this);


			if ($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '85%'
		});
	};


	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function () {
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function () {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#fh5co-counter').length > 0) {
			$('#fh5co-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, {
				offset: '90%'
			});
		}
	};

	// Parallax
	var parallax = function () {
		$(window).stellar();
	};


	$(function () {
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	});


}());

function bukaUndangan() {
	const tombol = document.querySelector('.open-invite')
	const nav = document.querySelector('.fh5co-nav')
	tombol.classList.toggle("d-none")
	document.getElementById('myAudio').play();
	document.getElementById('stop').style.color = "red"
	nav.classList.toggle("d-none")

}
simplyCountdown('.simply-countdown', {
	year: 2021,
	month: 9,
	day: 9,
	hours: 22, // Default is 0 [0-23] integer 22 jam 2 ternyata
	minutes: 0, // Default is 0 [0-59] integer
	seconds: 0, // Default is 0 [0-59] integer
});


function onLoad() {
	const cover = document.querySelector('.fh5co-cover')
	cover.style.background = "url(images/gallery/slide5-min.jpg"
	var backgroundImg = ["1-slide.jpg", "slide2-min.jpg", "slide-min.jpg", "slide3-min.jpg", "slide4-min.jpg", "slide5-min.jpg"],
		base = "images/gallery/",
		secs = 9
	backgroundImg.forEach(function (img) {
		new Image().src = base + img;
		// caches images, avoiding white flash between background replacements
	});

	function backgroundSequence() {
		window.clearTimeout();
		var k = 0;
		for (i = 0; i < backgroundImg.length; i++) {
			setTimeout(function () {
				cover.style.animationDuration = "8s";
				cover.style.background = "transparent no-repeat";
				cover.style.backgroundImage = "url(" + base + backgroundImg[k] + ")";
				cover.style.backgroundSize = "cover";
				cover.style.animationName = "fadeInOpacity";
				cover.style.animationDirection = "alternate";
				cover.style.animationTimingFunction = "ease-in";

				// document.documentElement.style.backgroundSize = "100%";
				if ((k + 1) === backgroundImg.length) {
					setTimeout(function () {
						backgroundSequence()
					}, (secs * 1000))
				} else {
					k++;
				}
			}, (secs * 1000) * i)
		}
	}
	backgroundSequence();


	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	const tamu = document.querySelector('.tamu')
	tamu.innerHTML = params['hi']
}