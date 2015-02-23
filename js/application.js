// We have a domain name. website under construction.
// Domain name is done through Microsoft
// What do you want the website to accomplish?
// - be a sleek design
// - be face of business
// - brand building for our business, part of our marketing with other attorneys and clients
// - I WANT IT TO BE MINIMAL
// - Sleek modern and professional
// - More of the look 

// Graphics, backdrop pictures, bay area, walnut creek, east bay. Generic images
// Cool office building façade or a wall. 

// Basically the homepage, attorneys (my profile and Matt’s profile and paralegal’s profile, contact
// Contact Us (something that sends an email to us to send a message)

// Send her something in a week so we can keep her updated so we can be on the same page.


// Document Window Height
var windowHeight = $(window).height();
var wrapperHeight = $('.wrapper').height();
if (windowHeight > wrapperHeight) {
  $('.wrapper').css({'height':(windowHeight)+'px'});
}

// Smooth Scrolling
$('nav a').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});