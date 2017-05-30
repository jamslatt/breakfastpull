$(document).ready(function(){
  $('.out').css('display','none');
  $('.submit').click(function(){
    // Collect Values on Submit
    var regBun = $('#burritoMix').val();
    var qtrBun = $('#guac').val();
    var macBun = $('#swblend').val();
    var artBun = $('#fold').val();
    var tortilla = $('#hotcakes').val();


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
