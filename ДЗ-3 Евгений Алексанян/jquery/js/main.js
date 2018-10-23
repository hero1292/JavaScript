window.addEventListener('load', function () {

    $('.check').on('focus', function () {
        $(this).addClass('focus');
    }).on('blur', function () {
        $(this).removeClass('focus');
    });

    // $('.items .item').on('click', function () {
    //     var items = $(this);
    //     items.css({color: '#fff', background: 'red', cursor: 'pointer', fontSize: '5em'});
    //     // items.css('color', 'red');
    //     console.log(items.css('color'));
    //     console.log(items.css('background-color'));
    //     console.log(items.css('cursor'));
    //     console.log(items.css('font-size'));
    // });

    $('.items .item').on('click', function(){
        var item = $(this);

        console.log(item.css('color'));
        item.css('color', '#777');
        item.html('1-1');
    }).css({
        fontSize: '20px',
        color: '#fff',
        background: '#f90',
        cursor: 'pointer'
    });

    $('.items .item').on('click', function () {
        $(this).fade(1000, 500, function () {
            this.style.opacity = 1;
            this.style.display = 'block';
        })
    });

    $('.checkbox').on('click', function () {
        console.log($('.checkbox').prop('checked'));
    });

    $('.checkbox').prop('checked', true);

});