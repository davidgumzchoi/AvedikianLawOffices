// Images to load faster
// Fix contact form

$(function(){
	$('#header').load('header.html'); 
	$('#footer').load('footer.html'); 
});

// Document Window Height
if (!window.matchMedia('(max-width: 375px)').matches) {
	if ($('#home').length || $('#home2').length) {
		$(window).load(function() {
			var windowHeight = $(window).height();
			var wrapperHeight = $('.wrapper').height();
			var footerHeight = $('#footer').outerHeight();
			if (windowHeight > wrapperHeight) {
			  	$('.wrapper').css({'height':(windowHeight - footerHeight)+'px'});
			}
		})
	}
}