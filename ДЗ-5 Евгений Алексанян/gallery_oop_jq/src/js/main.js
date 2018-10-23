"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function () {

    var slider1 = new Slider({
        images: '.gallery1 .photos img',
        buttonPrev: '.gallery1 .buttons .prev',
        buttonNext: '.gallery1 .buttons .next',
        time: 3000,
        timeAnimation: 1000,
        autoPlay: true,
        position: 'top',
        deviation: '100%',
        deviationMin: '-100%'
    });

    slider1.click();

    var slider2 = new Slider({
        images: '.gallery2 .photos img',
        buttonPrev: '.gallery2 .buttons .prev',
        buttonNext: '.gallery2 .buttons .next',
        time: 5000,
        timeAnimation: 2000,
        autoPlay: true,
        position: 'left',
        deviation: '50%',
        deviationMin: '-50%'
    });

    slider2.click();

    var slider3 = new Slider({
        images: '.gallery3 .photos img',
        buttonPrev: '.gallery3 .buttons .prev',
        buttonNext: '.gallery3 .buttons .next',
        time: 3000,
        timeAnimation: 2000,
        autoPlay: false,
        position: 'top',
        deviation: '70%',
        deviationMin: '-70%'
    });

    slider3.click();
});

var Slider = function () {
    function Slider(slider) {
        _classCallCheck(this, Slider);

        this.imageArr = $(slider.images);
        this.btnPrev = $(slider.buttonPrev);
        this.btnNext = $(slider.buttonNext);
        this.time = slider.time;
        this.timeAnimation = slider.timeAnimation;
        this.autoPlay = slider.autoPlay;
        this.position = slider.position;
        this.deviation = slider.deviation;
        this.deviationMin = slider.deviationMin;
        this.count = 0;
    }

    _createClass(Slider, [{
        key: 'prev',
        value: function prev() {
            var _imageArr$eq$animate, _imageArr$eq$css$anim;

            this.imageArr.eq(this.count).animate((_imageArr$eq$animate = {}, _defineProperty(_imageArr$eq$animate, this.position, this.deviation), _defineProperty(_imageArr$eq$animate, 'opacity', 0), _imageArr$eq$animate), this.timeAnimation);

            this.count--;

            if (this.count < 0) {
                this.count = this.imageArr.length - 1;
            }

            this.imageArr.eq(this.count).css(_defineProperty({}, this.position, this.deviationMin)).animate((_imageArr$eq$css$anim = {}, _defineProperty(_imageArr$eq$css$anim, this.position, 0), _defineProperty(_imageArr$eq$css$anim, 'opacity', 1), _imageArr$eq$css$anim), this.timeAnimation, $.bez([0, .64, .61, 1.46]));
        }
    }, {
        key: 'next',
        value: function next() {
            var _imageArr$eq$animate2, _imageArr$eq$css$anim2;

            this.imageArr.eq(this.count).animate((_imageArr$eq$animate2 = {}, _defineProperty(_imageArr$eq$animate2, this.position, this.deviationMin), _defineProperty(_imageArr$eq$animate2, 'opacity', 0), _imageArr$eq$animate2), this.timeAnimation);

            this.count++;

            if (this.count >= this.imageArr.length) {
                this.count = 0;
            }

            this.imageArr.eq(this.count).css(_defineProperty({}, this.position, this.deviation)).animate((_imageArr$eq$css$anim2 = {}, _defineProperty(_imageArr$eq$css$anim2, this.position, 0), _defineProperty(_imageArr$eq$css$anim2, 'opacity', 1), _imageArr$eq$css$anim2), this.timeAnimation, $.bez([0, .64, .61, 1.46]));
        }
    }, {
        key: 'click',
        value: function click() {
            var _this = this;

            this.btnPrev.on('click', function (e) {
                _this.prev(e);
                _this.$setInterval();
            });

            this.btnNext.on('click', function (e) {
                _this.next(e);
                _this.$setInterval();
            });

            this.$setInterval();
        }
    }, {
        key: '$setInterval',
        value: function $setInterval() {
            var _this2 = this;

            if (this.autoPlay) {
                clearInterval(this.timer);
                this.timer = setInterval(function () {
                    return _this2.next();
                }, this.time);
            }
        }
    }]);

    return Slider;
}();