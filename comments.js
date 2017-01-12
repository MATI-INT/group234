var get_comments = function() {
  var $el = this;
  $.getJSON('http://localhost:3000/comments.json',
      function (data) {
        $el.empty();
        for (var i = 0, j = data.length; i < j; i++) {
          var comment = data[i];
          $el.append(
              '<p>' + comment.body +
              '<br><small>' + comment.created_at +
              '</small></p><hr>'
          );
        }
      }
  );
};

$(document).ready(function() {
  var $chat = $('#chat');
  get_comments.apply($chat);

  setInterval(function() {
    get_comments.apply($chat);
  }, 5000);

  $('#send_comment').submit(function(e) {
    e.preventDefault();
    var $textarea = $(this).find('textarea');
    $.post(
        'http://localhost:3000/comments',
        {body: $textarea.val()},
        function() {
          $textarea.val('');
        }
    );

    return false;
  });
});