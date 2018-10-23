/*
	some - string selector
	some - HTMLElement
	some - array || NodeList
*/

function $(some) {
    var elements;

    if (some instanceof HTMLElement) {
        elements = [some];
    } else {
        elements = document.querySelectorAll(some);
    }

    return new OurJquery(elements);
}

function OurJquery(elems) {
    this.elems = elems;

    this.on = function (eventname, callback) {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].addEventListener(eventname, callback);
        }

        return this;
    };

    this.addClass = function (className) {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].classList.add(className);
        }

        return this;
    };

    this.removeClass = function (className) {
        for (var i = 0; i < this.elems.length; i++) {
            this.elems[i].classList.remove(className);
        }

        return this;
    };

    /*
        content не передан - вернёт innerHTMl первого элемента
        content передан - установит innerHTMl всем элементам
    */
    this.html = function (content) {
        if (content === undefined) {
            return (this.elems[0] === undefined) ? '' : this.elems[0].innerHTML;
        } else {
            for (var i = 0; i < this.elems.length; i++) {
                this.elems[i].innerHTML = content;
            }

            return this;
        }
    };

    /*
        name - имя атрибута
        value не передан - вернёт значение атрибута ПЕРВОГО ЭЛЕМЕНТА!!!!
        value передан - установит значение атрибута name = value ДЛЯ КАЖДОГО
    */
    this.attr = function (name, value) {
        if (value === undefined) {
            return (this.elems[0] === undefined) ?
                '' :
                this.elems[0].getAttribute(name);
        } else {
            for (var i = 0; i < this.elems.length; i++) {
                this.elems[i].setAttribute(name, value)
            }

            return this;
        }
    };

    /*
        ????
        задаёт/получает НЕ АТРИБУТ, а СВОЙСТВО УЗЛУ DOM
    */
    this.prop = function (name, value) {
        if (value === undefined) {
            return (this.elems[0] === undefined) ?
                '' :
                this.elems[0][name];
        } else {
            for (var i = 0; i < this.elems.length; i++) {
                this.elems[i].setAttribute(name, value);
            }

            return this;
        }
    };

    /*
        param1 - str, param2 - не передан
        .css('color'); => вернуть style.color первого элемента набора

        param1 - str, param2 - str
        .css('color', 'red'); => всем элементам задаём style.color = 'red'

        param1 - object, param2 - не передан
        .css({
            color: '#fff',
            background: '#f90',
            cursor: 'pointer'
        }); => всем элементам задаём все пары
                    style.color = '#fff'
                    style.background = '#f90'
                    style.cursor = 'pointer'

     */
    this.css = function (param1, param2) {
        if (param1 instanceof Object) {
            for (var i = 0; i < this.elems.length; i++) {
                // Object.assign(this.elems[i].style, param1);
                for (var key in param1) {
                    this.elems[i].style[key] = param1[key];
                }
            }
            return this;
        } else if (param2 === undefined) {
            return (this.elems[0] === undefined) ?
                '' :
                window.getComputedStyle(this.elems[0], null).getPropertyValue(param1);
        } else {
            for (var i = 0; i < this.elems.length; i++) {
                this.elems[i].style.setProperty(param1, param2);
            }
            return this;
        }
    };

    /*
         скрыть все элементы и вызвать callback для каждого
     */
    this.fade = function (time, fps, callback) {
        var callBack = callback || function () {
        };

        for (var i = 0; i < this.elems.length; i++) {
            animation(this.elems[i], time, fps, callBack);
        }
    };

    function animation(elem, t, f, callback) {
        // кадров в секунду (по умолчанию 50)
        var fps = f || 50;
        // время работы анимации (по умолчанию 500мс)
        var time = t || 500;
        // сколько всего покажем кадров
        var steps = time / (1000 / fps);
        // текущее значение opacity - изначально 0
        var op = 1;
        // изменение прозрачности за 1 кадр
        var d0 = op / steps;

        // устанавливаем интервал (1000 / fps)
        // например, 50fps -> 1000 / 50 = 20мс
        var timer = setInterval(function () {
            // уменьшаем текущее значение opacity
            op -= d0;
            // устанавливаем opacity элементу DOM
            elem.style.opacity = op;
            // уменьшаем количество оставшихся шагов анимации
            steps--;

            // если анимация окончена
            if (steps == 0) {
                // убираем интервал выполнения
                clearInterval(timer);
                // и убираем элемент из потока документа
                elem.style.display = 'none';

                callback.call(elem);
            }
        }, (1000 / fps));
    }
}
