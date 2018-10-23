$(function () {

    // Можно было бы использовать здесь .show(), но мне больше понравилось .slideDown()
    $('.answer:first').slideDown(500);

    $('.faq .ask').on('click', function () {
        var a = $(this).next();

        $('.answer:visible').not(a).hide(1000, $.bez([.11,.89,.97,.13]));

        a.stop(true).slideDown().animate({
            width: '300px',
            opacity: 0.5
        }, 1000, $.bez([.11,.89,.97,.13])).animate({
            width: '600px',
            opacity: 1
        }, 500, $.bez([.11,.89,.97,.13]));
    });
});

