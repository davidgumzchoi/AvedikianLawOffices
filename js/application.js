$(function(){
	$('#header').load('header.html'); 
	$('#footer').load('footer.html'); 
});

// Document Window Height
var $home = $('#home');
if ($('#home').length) {
	$(window).load(function() {
		var windowHeight = $(window).height();
		var wrapperHeight = $('.wrapper').height();
		var footerHeight = $('#footer').outerHeight();
		if (windowHeight > wrapperHeight) {
		  	$('#home').css({'height':(windowHeight - footerHeight)+'px'});
		}
	})
}