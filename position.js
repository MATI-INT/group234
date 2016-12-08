$(document).ready(function() {
  $('.scroll_to').click(function(e) {
    e.preventDefault();
    var selector = $(this).attr('href'),
        $el = $(selector);
    $('html').animate({
      'scrollTop': $el.length ? $el.offset().top : 0
    }, 3000, function() {
      window.location.hash = selector;
    });
  });
});