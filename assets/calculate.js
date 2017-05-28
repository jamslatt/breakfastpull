$(document).ready(function(){
  $('.out').css('display','none');
  $('.submit').click(function(){
    // Collect Values on Submit
    var burritoMix = $('#burritoMix').val();
    var guac = $('#guac').val();
    var swblend = $('#swblend').val();
    var fold = $('#fold').val();
    var hotcakes = $('#hotcakes').val();
    var tortillas = $('#tortillas').val();
    var muff = $('#muff').val();


    function calcNeeded(have, need) {
      return need - have;
    }

    $('.in').hide();
    $('.burritoMix').append(calcNeeded(burritoMix, 8) + " (not adjusted for thurs,sat,sun yet)");
    $('.guac').append(calcNeeded(guac, 3));
    $('.swblend').append(calcNeeded(swblend, 2));
    $('.fold').append(calcNeeded(fold, 12));
    $('.hotcakes').append(calcNeeded(hotcakes, 8));
    $('.tortillas').append(calcNeeded(tortillas, 10));
    $('.muff').append(calcNeeded(muff, 8));

    $('.out').fadeIn('fast');

    return false;

  })
  $('.back').click(function () {
    $('.out').hide();
    $('.i').html("");
    $('.in').fadeIn('fast');
  })
});
