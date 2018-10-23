window.addEventListener('load', function () {
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var res = document.querySelector('.res');
    var errors = document.querySelector('.err');
    var buttons = document.querySelectorAll('.btn');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            inp1.value = inp1.value.replace(/[^\d.]/g, '').replace(/^([^\.]*\.)|\./g, '$1');
            inp2.value = inp2.value.replace(/[^\d.]/g, '').replace(/^([^\.]*\.)|\./g, '$1');

            if (isNaN(inp1.value) || isNaN(inp2.value) || inp1.value == '' || inp2.value == '') {
                errors.innerHTML = 'Введите число!';
            } else {
                var mathOperation = this.getAttribute('data-op');
                calcRes(mathOperation);
                this.value = '\u2612';
                this.style.backgroundColor = '#ea4335';
                this.disabled = true;
            }
        })
    }

    function calcRes(mathOperation) {
        var a = parseFloat(inp1.value);
        var b = parseFloat(inp2.value);
        var resComp;


        if (mathOperation == '+') {
            resComp = a + b;
        }

        else if (mathOperation == '-') {
            resComp = a - b;
        }

        else if (mathOperation == '*') {
            resComp = a * b;
        }

        else if (mathOperation == '/') {
            if (b == 0) {
                errors.innerHTML = 'На ноль делить нельзя!';
            } else {
                resComp = a / b;
            }
        }

        res.innerHTML = resComp.toFixed(2);
    }

    function btnActivated() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[0].value = '+';
            buttons[1].value = '-';
            buttons[2].value = '*';
            buttons[3].value = '/';
            buttons[i].style.backgroundColor = 'red';
            errors.innerHTML = '';
        }
    }

    inp1.oninput = btnActivated;
    inp2.oninput = btnActivated;
});