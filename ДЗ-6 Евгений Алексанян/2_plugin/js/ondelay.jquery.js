"use strict";
(function ($) {
    $.fn.onDelay = function (event, handler, delay) {
        let $event = event;
        let $handler = handler;
        let $delay = delay || 200;

        this.each(function (i, elem) {
            let $elem = $(elem);
            let $eventTimer;

            $elem.on($event, function () {
                clearInterval($eventTimer);

                $eventTimer = setTimeout(() => {
                    $handler();
                }, $delay);
            });
        });

        return this;
    }
})(jQuery);