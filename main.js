$(document).ready(function() {
  // kuler.adobe.com
  var table = '<table>',
      table_placeholder = $('#place_table');

  $.getJSON('data.json', function(data) {
    for(var i = 0, ii = data.length;
        i < ii; i++) {
      table += '<tr><td>' +
          data[i].name +
          '</td></tr>';
    }
    table += '</table>';
    table_placeholder.replaceWith( $(table) );
  });

  $('body').on('click', 'tr', function() {
    var $this = $(this);
    $this.toggleClass('highlight');
  });
});