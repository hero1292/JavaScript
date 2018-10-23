window.addEventListener('load', function () {
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var options = document.querySelectorAll('.select .option');
    var res = document.querySelector('.res');
    var errors = document.querySelector('.err');

    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function () {
            inp1.value = inp1.value.replace(/[^\d.]/g, '').replace(/^([^\.]*\.)|\./g, '$1');
            inp2.value = inp2.value.replace(/[^\d.]/g, '').replace(/^([^\.]*\.)|\./g, '$1');

            if (isNaN(inp1.value) || isNaN(inp2.value) || inp1.value == '' || inp2.value == '') {
                errors.innerHTML = 'Введите число!';
            } else {
                var mathOperation = this.getAttribute('data-op');
                calcRes(mathOperation);
                this.style.backgroundColor = 'red';
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

    function selectActivated() {
        for (var i = 0; i < options.length; i++) {
            options[i].disabled = false;
            options[i].style.backgroundColor = 'green';
            errors.innerHTML = '';
        }
    }

    inp1.oninput = selectActivated;
    inp2.oninput = selectActivated;
    options.onselect = selectActivated;
});