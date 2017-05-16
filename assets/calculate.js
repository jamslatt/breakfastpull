$(document).ready(function(){
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

    console.log(calcNeeded(guac, 10));
    $('.in').hide();
    $('.burritoMix').append(calcNeeded(burritoMix, 8));
    $('.guac').append(calcNeeded(guac, 3));
    $('.swblend').append(calcNeeded(swblend, 2));
    $('.fold').append(calcNeeded(fold, 12));
    $('.hotcakes').append(calcNeeded(hotcakes, 8));
    $('.tortillas').append(calcNeeded(tortillas, 10));
    $('.muff').append(calcNeeded(muff, 8));

    $('.out').show();

    return false;

  })
});
