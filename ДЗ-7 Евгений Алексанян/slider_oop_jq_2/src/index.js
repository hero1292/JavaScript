"use strict";

import 'jquery';
import './js/jquery.bez.min';

$(function () {

    let slider1 = new Slider({
        images: '.gallery1 .photos img',
        buttonPrev: '.gallery1 .buttons .prev',
        buttonNext: '.gallery1 .buttons .next'
    });

    slider1.$click();

    let slider2 = new SliderTop({
        images: '.gallery2 .photos img',
        buttonPrev: '.gallery2 .buttons .prev',
        buttonNext: '.gallery2 .buttons .next'
    });

    slider2.$click();

    let slider3 = new SliderAuto({
        images: '.gallery3 .photos img',
        buttonPrev: '.gallery3 .buttons .prev',
        buttonNext: '.gallery3 .buttons .next'
    });

    slider3.$click();
});

class Slider {
    constructor(slider) {
        this.imageArr = $(slider.images);
        this.btnPrev = $(slider.buttonPrev);
        this.btnNext = $(slider.buttonNext);
        this.count = 0;
    }

    $startOfMotionPrev() {
        this.imageArr.eq(this.count).animate({
            left: '100%',
            opacity: 0
        }, 1000);
    }

    $endOfMotionPrev() {
        this.imageArr.eq(this.count).css({
            left: '-100%'
        }).animate({
            left: 0,
            opacity: 1
        }, 1000, $.bez([0, .64, .61, 1.46]));
    }

    $startOfMotionNext() {
        this.imageArr.eq(this.count).animate({
            left: '-100%',
            opacity: 0
        }, 1000);
    }

    $endOfMotionNext() {
        this.imageArr.eq(this.count).css({
            left: '100%'
        }).animate({
            left: 0,
            opacity: 1
        }, 1000, $.bez([0, .64, .61, 1.46]));
    }

    $prev() {
        this.$startOfMotionPrev();

        this.count--;

        if (this.count < 0) {
            this.count = this.imageArr.length - 1;
        }

        this.$endOfMotionPrev();
    };

    $next() {
        this.$startOfMotionNext();

        this.count++;

        if (this.count >= this.imageArr.length) {
            this.count = 0;
        }

        this.$endOfMotionNext();
    };

    $click() {
        this.btnPrev.on('click', (e) => {
            this.$prev(e);
        });

        this.btnNext.on('click', (e) => {
            this.$next(e);
        });
    }
}

class SliderTop extends Slider {
    $startOfMotionPrev() {
        this.imageArr.eq(this.count).animate({
            top: '100%',
            opacity: 0
        }, 1000);
    }

    $endOfMotionPrev() {
        this.imageArr.eq(this.count).css({
            top: '-100%'
        }).animate({
            top: 0,
            opacity: 1
        }, 1000, $.bez([.58, .14, 1, .16]));
    }

    $startOfMotionNext() {
        this.imageArr.eq(this.count).animate({
            top: '-100%',
            opacity: 0
        }, 1000);
    }

    $endOfMotionNext() {
        this.imageArr.eq(this.count).css({
            top: '100%'
        }).animate({
            top: 0,
            opacity: 1
        }, 1000, $.bez([.58, .14, 1, .16]));
    }
}

class SliderAuto extends Slider {
    $click() {
        this.btnPrev.on('click', (e) => {
            this.$prev(e);
            this.$setInterval();
        });

        this.btnNext.on('click', (e) => {
            this.$next(e);
            this.$setInterval();
        });

        this.$setInterval();
    }

    $setInterval() {
        clearInterval(this.timer);
        this.timer = setInterval(() => this.$next(), 3000)
    }
}