jQuery(document).ready(function() {
 	var $ = jQuery,
		$window = $(window),
		$body = $('body'),
    	screenWidth = $window.width(),
        screenHeight = $window.height();

    $window.on('resize', function() {
        screenWidth = $window.width();
        screenHeight = $window.height();
    });

	$window.on('load', function() {
		$window.resize();
	});

// IE<8 Warning
    if ($('html').hasClass('oldie')) {
        $('body').empty().html('Please, Update your Browser to at least IE8');
    }

// Disable Empty Links
    $('[href=#], .btn.disabled').on('click', function(event) {
        event.preventDefault();
    });

// Tooltip
    $("[data-toggle='tooltip']").tooltip();

// Featured Posts Slider
	$(".testimonials").owlCarousel({
		items : 2,
		itemsDesktop : [1199, 2],
		itemsDesktopSmall : [991, 2],
		itemsTablet : [767, 1],
		itemsMobile : [479, 1],
		navigation : true,
		navigationText : ['Prev', 'Next'],
		pagination : true
	});









});
