console.log('testing');

//scroll to avatar on click of icon
$(".scroll-icon").click(function(e) {
  $('html, body').animate({
    scrollTop: $("#avatar").offset().top - 70
  }, 1500);
});

//Scroll to element on click
$("#home").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 1100);
});

$("#about").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#avatar").offset().top - 70
      }, 1100);
});

$("#projects").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#projects-heading").offset().top - 70
      }, 1100);
});

$("#contact").click(function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#contact-heading").offset().top - 70
      }, 1100);
});
