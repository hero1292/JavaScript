$(function () {
    $(document).onDelay('scroll', function () {
        console.log(this);
    });

    $('.content').onDelay('click', function () {
        $('.heads').css('color', '#f90');
    }, 1000)
});
