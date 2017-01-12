var pad = function(str) {
  return ('0' + str).slice(-2);
};

$(document).ready(function() {
  var $clock = $('.clock');
  var $hours_el = $clock.find('.hours');
  var $minutes_el = $clock.find('.minutes');
  var $seconds_el = $clock.find('.seconds');

  setInterval(function() {
    $.getJSON('http://localhost:3000/',
        function(data) {
          $hours_el.text(pad(data.hours));
          $minutes_el.text(pad(data.minutes));
          $seconds_el.text(pad(data.seconds));
        });

  }, 1000);
});