$(document).ready(function(){

	$('html').removeClass("no-js");

	var mqBreakpoints = {
		'large-mobile': '380px',
		'phablet': '480px',
		'small-tablet': '580px',
		'tablet': '768px',
		'desktop': '1024px',
		'wide': '1366px',
		'widest': '1600px'
	};

	function moveProductLink__match() {

		var productCtas = $('.js-move--media-list-info'),
			infoContainers = $('.js-media-list-info'),
			classesToRemove = 'cta cta--small';

		productCtas.each(function(i, elem) {
			var $cta = $(elem),
				$container = infoContainers.eq(i);

			$cta.removeClass(classesToRemove).appendTo($container);
		});
	}

	function moveProductLink__unmatch() {

		var productCtas = $('.js-move--media-list-info'),
			ctaContainers = $('.js-media-list-cta'),
			classesToAdd = 'cta cta--small';

		productCtas.each(function(i, elem) {
			var $cta = $(elem),
				$container = ctaContainers.eq(i);

			$cta.addClass(classesToAdd).appendTo($container);
		});
	}

	function moveSecondaryNav__match() {

		var $secondaryNav = $('.js-secondary-navigation'),
			$tertiaryInfo = $('.js-tertiary-info');

		$secondaryNav.appendTo($tertiaryInfo);
	}

	function moveSecondaryNav__unmatch() {

		var $secondaryNav = $('.js-secondary-navigation'),
			$headerOptions = $('.js-header-options');

		$secondaryNav.insertAfter($headerOptions);
	}

	// do stuff at tablet size
	enquire.register("screen and (min-width:" + mqBreakpoints['tablet'] + ")", {

	    match : function() {
	    	moveProductLink__match();
	    },      

	    unmatch : function() {
	    	moveProductLink__unmatch();
	    }, 

	    deferSetup : true,
	      
	});

	// do stuff at desktop size
	enquire.register("screen and (min-width:" + mqBreakpoints['desktop'] + ")", {

	    match : function() {
	    	moveSecondaryNav__match();
	    },      

	    unmatch : function() {
	    	moveSecondaryNav__unmatch();
	    }, 

	    deferSetup : true,
	      
	});

});