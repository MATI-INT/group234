var pad = function(str) {
  return ('0' + str).slice(-2);
};

$(document).ready(function() {
  var $clock = $('.clock');
  var $hours_el = $clock.find('.hours');
  var $minutes_el = $clock.find('.minutes');
  var $seconds_el = $clock.find('.seconds');

  setInterval(function() {
    var date = new Date();
    var seconds = pad(date.getSeconds());
    var minutes = pad(date.getMinutes());
    var hours = pad(date.getHours());

    $hours_el.text(hours);
    $minutes_el.text(minutes);
    $seconds_el.text(seconds);
  }, 1000);
});