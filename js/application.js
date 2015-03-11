<<<<<<< HEAD
// Something that sends an email to send a message

<<<<<<< HEAD
// Document Window Height
var windowHeight = $(window).height();
var wrapperHeight = $('.wrapper').height();
if (windowHeight > wrapperHeight) {
<<<<<<< HEAD
  $('.wrapper').css({'height':(windowHeight)+'px'});
}
=======
  	$('.wrapper').css({'height':(windowHeight)+'px'});
}
=======
// New Update 3/9
/*
+Logo:  We like the logo on the nav bar, in the center of the tabs.  The additional larger logo on the home page can be removed.
+Font & Font size:  The font is slightly too big throughout the website.  For “AVEDIKIAN LAW OFFICES”  we can keep the font but not in bold.
+For the rest, as Hannah suggests:  I think it would be nice if all of the words were all caps, thinner, and smaller.  There are some thinner Univers fonts you can choose from.
+Links:  Can we add a link to Yelp also?  You can remove the Facebook link (we probably will not have a Facebook page at all)
+Overall layout:  on my browser, I have to scroll down to see the bottom section of the website with our contact info.  Is there a way to see the entire page at once without having to scroll down?
+Content:  We will provide content soon – still working on that.
+Photos:  Here are the photos we’d like to use for each page of the website.
+Mac compatible:  On a Mac, the attorney overlaps with the logo.  Also, the font looks different on the Mac.
+Headshots:  We have the headshot photos – I will forward in a separate email.
*/
>>>>>>> 146ba87... third iteration responsive
=======
// Images to load faster
// Fix contact form
>>>>>>> 7d883f6... third iteration complete

$(function(){
	$('#header').load('header.html'); 
	$('#footer').load('footer.html'); 
});
<<<<<<< HEAD
>>>>>>> third iteration
=======

// Document Window Height
<<<<<<< HEAD

if ($('#home').length) {
	$(window).load(function() {
		var windowHeight = $(window).height();
		var wrapperHeight = $('.wrapper').height();
		var footerHeight = $('#footer').outerHeight();
		if (windowHeight > wrapperHeight) {
		  	$('.wrapper').css({'height':(windowHeight - footerHeight)+'px'});
		}
	})
}
>>>>>>> 146ba87... third iteration responsive
=======
if (!window.matchMedia('(max-width: 375px)').matches) {
	if ($('#home').length) {
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
>>>>>>> 7d883f6... third iteration complete
