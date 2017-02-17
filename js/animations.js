$(document).ready(function() {

  $('.tweet-compose').focus( function() {
    $(this).css("height", "50px");
  });


  $('.tweet-compose').click( function() {
    $('#tweet-controls').show('slow');
  });


  $('.tweet-compose').keyup( function() {
    var charCountAllowed = 140 - $(this).val().length
      $('#char-count').text(charCountAllowed--);
        if (charCountAllowed < 10) {
            $('#char-count').css('color', 'red');
          } else if (charCountAllowed > 10) {
            $('#char-count').css('color', '#000');
          } if (charCountAllowed < 0) {
            $('#tweet-submit').attr('disabled', 'disabled')
          } else if (charCountAllowed === 0){
            $('#tweet-submit').removeAttr('disabled', 'disabled')
          }
  });

  // TWEET BUTTON FUNCTION

  $('#tweet-submit').click( function() {

    var $tweet = $('.tweet-compose');
    var $clone = $('#stream').children().first().clone();

    $clone.find('.tweet-text').text($tweet.val());
    $clone.find('.avatar').attr('src', 'http://www.americaremembers.com/wp-content/uploads/2013/08/Chuck-Norris-BW.jpg');

    $clone.find('.fullname').text('Chuck Norris');
    $clone.find('.username').text('@RoundHouseKickToTheFace');

    $tweet.val('');
    $('#stream').prepend($clone);
  });


  $('#stream').on('mouseenter','.content', function() {
    $(this).find('.tweet-actions').show();
  });


  $('#stream').on('mouseleave', '.content', function() {
    $(this).find('.tweet-actions').hide();
  });

  $('#stream').on('click', '.content', function () {
    $(this).find('.stats').slideDown('slow');
  });

});
