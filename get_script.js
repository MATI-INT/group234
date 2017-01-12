$(document).ready(function() {
  $.getScript('http://localhost:3000/get_script');
  $.ajax('http://localhost:3000', {
    method: 'GET',
    format: 'script',
    success: function() {

    },
    error: function() {

    }
  })
});