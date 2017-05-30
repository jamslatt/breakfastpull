$(document).ready(function() {
    $('.out').css('display', 'none');
    $('.submit').click(function() {
        // Collect Values on Submit
        var regBun = $('#b_reg').val();
        var qtrBun = $('#b_qtr').val();
        var macBun = $('#b_mac').val();
        var artBun = $('#b_art').val();
        var tortilla = $('#b_tortilla').val();


        function calcNeeded(have, need) {
            return need - have;
        }
        // Date Logic
        var now = new Date();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = days[now.getDay()];

        $('.in').hide();
        // Reg Bun
        if (day == "Thursday" || day == "Wednesday" || day == "Friday" || day == "Saturday" || day == "Sunday") {
            $('.b_reg').append(calcNeeded(regBun, 12));
        } else {
            $('.b_reg').append(calcNeeded(regBun, 10));
        };
        // Quarter Buns
        if (day == "Thursday" || day == "Wednesday" || day == "Friday" || day == "Saturday" || day == "Sunday") {
            $('.b_qtr').append(calcNeeded(qtrBun, 4));
        } else {
            $('.b_qtr').append(calcNeeded(qtrBun, 3));
        };
        // Mac Buns
        if (day == "Thursday" || day == "Wednesday" || day == "Saturday" || day == "Sunday") {
            $('.b_mac').append(calcNeeded(macBun, 4));
        } else if (day == "Friday") {
            $('.b_mac').append(calcNeeded(macBun, 5));
        } else {
            $('.b_mac').append(calcNeeded(macBun, 3));
        };
        // Artisan Roll
        if (day == "Thursday" || day == "Wednesday" || day == "Friday") {
            $('.b_art').append(calcNeeded(artBun, 4));
        } else {
            $('.b_art').append(calcNeeded(artBun, 3));
        }
        // Tortillas
        if (day == "Thursday" || day == "Saturday" || day == "Friday") {
            $('.b_tortilla').append(calcNeeded(tortilla, 10));
        } else {
            $('.b_tortilla').append(calcNeeded(tortilla, 10));
        }
        $('.out').fadeIn('fast');
        return false;

    });
    $('.back').click(function() {
        $('.out').hide();
        $('.i').html("");
        $('.in').fadeIn('fast');
    })
});
