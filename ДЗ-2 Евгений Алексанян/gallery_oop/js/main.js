window.addEventListener('load', function () {

    var slider1 = new Slider({
        images: '.gallery1 .photos .img1',
        buttonPrev: '.gallery1 .buttons .prev1',
        buttonNext: '.gallery1 .buttons .next1',
        time: 3000
    });

    var slider2 = new Slider({
        images: '.gallery2 .photos .img2',
        buttonPrev: '.gallery2 .buttons .prev2',
        buttonNext: '.gallery2 .buttons .next2',
        time: 5000
    });

    var i = 1;
    ++i;
    alert(2 * i);
});

function Slider(slider) {
    var imageArr = document.querySelectorAll(slider.images);
    this.btnPrev = document.querySelector(slider.buttonPrev);
    this.btnNext = document.querySelector(slider.buttonNext);
    var time = slider.time;
    var count = 0;

    this.prev = function () {
        imageArr[count].className = '';
        count--;
        if (count < 0) {
            count = imageArr.length - 1;
        }
        imageArr[count].className = 'showed';
    };

    this.next = function () {
        imageArr[count].className = '';
        count++;
        if (count >= imageArr.length) {
            count = 0;
        }
        imageArr[count].className = 'showed';
    };

    this.autoSlider = function () {
        var count1 = 0;
        var timer = setInterval(function () {
            imageArr[count1].className = '';
            count1++;
            if (count1 >= imageArr.length) {
                count1 = 0;
            }
            imageArr[count1].className = 'showed';
        }, time);
    };

    this.btnPrev.onclick = this.prev;
    this.btnNext.onclick = this.next;
    this.autoSlider();
}