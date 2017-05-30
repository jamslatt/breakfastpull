$(document).ready(function(){
  $('.out').css('display','none');
  $('.submit').click(function(){
    // Collect Values on Submit
    var regBun = $('#b_reg').val();
    var qtrBun = $('#b_qtr').val();
    var macBun = $('#b_mac').val();
    var artBun = $('#b_art').val();
    var tortilla = $('#b_tortilla').val();


    function calcNeeded(have, need) {
      return need - have;
    }

    $('.in').hide();
    $('.b_reg').append(calcNeeded(regBun, 3));
    $('.b_qtr').append(calcNeeded(qtrBun, 3));
    $('.b_mac').append(calcNeeded(macBun, 2));
    $('.b_art').append(calcNeeded(artBun, 12));
    $('.b_tortilla').append(calcNeeded(tortilla, 12));
    $('.out').fadeIn('fast');

    return false;

  });
  $('.back').click(function () {
    $('.out').hide();
    $('.i').html("");
    $('.in').fadeIn('fast');
  })
});
