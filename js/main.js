console.log('testing');

$(".scroll-icon").click(function(e) {
    $('html, body').animate({
        scrollTop: $("#avatar").offset().top - 70
    }, 1500);
  });
