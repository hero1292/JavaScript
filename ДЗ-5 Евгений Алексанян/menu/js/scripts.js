$(function () {
    var $menu = $('.menu');
    var $window = $(window);
    var scrollTimer;

    $window.on('scroll', function () {
      var context = this;

      clearInterval(scrollTimer);

      scrollTimer = setTimeout(function(){
        menuOpacity.call(context);
      }, 100);
    });

  function menuOpacity() {
    var $scrolled = window.pageYOffset;

    if ($scrolled > 300) {
      $menu.addClass('menu-opacity');
    } else {
      $menu.removeClass('menu-opacity')
    }
    console.log('gh,ftth')
  }
});