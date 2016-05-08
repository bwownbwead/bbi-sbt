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

	enquire.register("screen and (min-width:" + mqBreakpoints['tablet'] + ")", {

	    // OPTIONAL
	    // If supplied, triggered when a media query matches.
	    match : function() {
	    	moveProductLink__match();
	    },      
	                                
	    // OPTIONAL
	    // If supplied, triggered when the media query transitions 
	    // *from a matched state to an unmatched state*.
	    unmatch : function() {
	    	moveProductLink__unmatch();
	    },    
	    
	    // OPTIONAL
	    // If supplied, triggered once, when the handler is registered.
	    setup : function() {},    
	                                
	    // OPTIONAL, defaults to false
	    // If set to true, defers execution of the setup function 
	    // until the first time the media query is matched
	    deferSetup : true,
	                                
	    // OPTIONAL
	    // If supplied, triggered when handler is unregistered. 
	    // Place cleanup code here
	    destroy : function() {}
	      
	});

});