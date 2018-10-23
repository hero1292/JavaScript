"use strict";
$(function () {

    let slider1 = new Slider({
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

    let slider2 = new Slider({
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

    let slider3 = new Slider({
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

class Slider {
    constructor(slider) {
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

    prev() {
        this.imageArr.eq(this.count).animate({
            [this.position]: this.deviation,
            opacity: 0
        }, this.timeAnimation);

        this.count--;

        if (this.count < 0) {
            this.count = this.imageArr.length - 1;
        }

        this.imageArr.eq(this.count).css({
            [this.position]: this.deviationMin
        }).animate({
            [this.position]: 0,
            opacity: 1
        }, this.timeAnimation, $.bez([0, .64, .61, 1.46]));
    };

    next() {
        this.imageArr.eq(this.count).animate({
            [this.position]: this.deviationMin,
            opacity: 0
        }, this.timeAnimation);

        this.count++;

        if (this.count >= this.imageArr.length) {
            this.count = 0;
        }

        this.imageArr.eq(this.count).css({
            [this.position]: this.deviation
        }).animate({
            [this.position]: 0,
            opacity: 1
        }, this.timeAnimation, $.bez([0, .64, .61, 1.46]));
    };

    click() {
        this.btnPrev.on('click', (e) => {
            this.prev(e);
            this.$setInterval();
        });

        this.btnNext.on('click', (e) => {
            this.next(e);
            this.$setInterval();
        });

        this.$setInterval();

    }

    $setInterval() {
        if (this.autoPlay) {
            clearInterval(this.timer);
            this.timer = setInterval(() => this.next(), this.time)
        }
    }
}