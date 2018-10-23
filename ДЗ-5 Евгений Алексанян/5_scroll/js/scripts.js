$(function () {

    var $links = $('.menu a');
    var $mh = parseInt($('.menu').height()) + 20;
    var $htmlBody = $('html, body');
    var $buttonUp = $('.button-up');
    var $window = $(window);

    $links.on('click', function (e) {
        e.preventDefault();

        $links.removeClass('active');
        var $a = $(this).addClass('active');
        var $selector = $a.attr('href');
        var $target = $($selector);

        if ($target.length > 0) {
            $htmlBody.animate({
                scrollTop: $target.offset().top - $mh + 1
            }, 1000, $.bez([.21, .86, .65, 1.43]));
        }
    });

    $window.on('scroll', function () {
        var $scrolled = window.pageYOffset;

        $links.each(function () {
            var $href = $(this).attr("href");
            var $targetScroll = $($href);
            if ($targetScroll.offset().top - $mh <= $scrolled) {
                $links.removeClass("active");
                $(this).addClass("active");
            }
        });

        if ($scrolled > 500) {
            $buttonUp.slideDown(1000, $.bez([0, 1.66, 1, -0.39]));
        } else {
            $buttonUp.slideUp(1000, $.bez([1, -0.3, 1, .47]));
        }
    });

    $buttonUp.on('click', function (e) {
        e.preventDefault();

        $htmlBody.animate({
            scrollTop: $htmlBody.offset().top
        }, 500, $.bez([1, -0.3, 1, .47]));
    })
});