window.addEventListener('load', function () {
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var go = document.querySelector('.go');
    var res = document.querySelector('.res');
    var error = document.querySelector('.err');

    go.addEventListener('click', function () {
        inp1.value = inp1.value.replace(/[^\d.]/g, '').replace( /^([^\.]*\.)|\./g, '$1' );
        inp2.value = inp2.value.replace(/[^\d.]/g, '').replace( /^([^\.]*\.)|\./g, '$1' );

        if (isNaN(inp1.value) || isNaN(inp2.value) || inp1.value == '' || inp2.value == '') {
            error.innerHTML = 'Введите число!';
        } else {
            var resComp = parseFloat(inp1.value) + parseFloat(inp2.value);
            res.innerHTML = resComp;
            this.disabled = true;
            this.value = '\u2612 =';
            this.style.backgroundColor = '#ea4335';
            if (inp1.value.length >= 5 || inp2.value.length >= 5) {
                res.style.fontSize = '35px';
            } else {
                res.style.fontSize = '50px';
            }
        }
    });

    function btnActivated() {
        go.disabled = false;
        go.value = '\u2611 =';
        go.style.backgroundColor = 'red';
        error.innerHTML = '';
    }

    inp1.oninput = btnActivated;
    inp2.oninput = btnActivated;
});
