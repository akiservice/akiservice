$(document).on('ready', function() {
	$('#menuBtn').on('click', function() {
		if ($('#sideMenu').css('right') == '-250px') {
			// move all elements to the left - open
			$('#main').animate({right: '250px'}, 50);
			$('#sideMenu').animate({right: '0px'}, 50);
		} else {
			// move all elements to the right - close
			$('#main').animate({right: '0px'}, 50);
			$('#sideMenu').animate({right: '-250px'}, 52);
		}
		$(this).children().toggleClass("change");
	});
	
	$('#main').on('click', function() {							// close a sideMenu on main container click
		if ($('#sideMenu').css('right') == '0px') {
			$('#sideMenu').animate({right: '-250px'}, 52);
			$(this).animate({right: '0px'}, 50);
			$('#menuBtn').children().removeClass("change");		// return to normal menu icon
		}
	});
});