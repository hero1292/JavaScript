window.addEventListener('load', function () {
    var firstName = document.querySelector('input[name=first-name]');
    var phone = document.querySelector('input[name=phone]');
    var email = document.querySelector('input[name=email]');
    var firstNameError = document.querySelector('#first-name-error');
    var phoneError = document.querySelector('#phone-error');
    var emailError = document.querySelector('#email-error');
    var button = document.querySelector('input[type=submit]');
    var submitError = document.querySelector('#submit-error');
    var validFirstName = /^[A-ZА-ЯЁ\s-]+$/i;
    var validPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){5,15}(\s*)?$/;
    var validEmail = /.+@.+\..+/i;

    function validationFirstName() {
        if (!validFirstName.test(this.value)) {
            firstNameError.innerHTML = 'Имя введено неверно!';
            this.classList.add('check-error');
            firstNameError.classList.remove('right');
        } else {
            firstNameError.innerHTML = 'Имя введено верно!';
            this.classList.remove('check-error');
            firstNameError.classList.add('right');
        }
    }

    function validationPhone() {
        /* можно было бы сделать проверку только на моб. телефоны российских операторов, но я решил
        дать шанс вписать свой номер всем :)) */

        if (!validPhone.test(this.value)) {
            phoneError.innerHTML = 'Номер телефона введен неверно!';
            this.classList.add('check-error');
            phoneError.classList.remove('right');
        } else {
            phoneError.innerHTML = 'Номер телефона введен верно!';
            this.classList.remove('check-error');
            phoneError.classList.add('right');
        }
    }

    function validationEmail() {
        if (!validEmail.test(this.value)) {
            emailError.innerHTML = 'Email введен не верно!';
            this.classList.add('check-error');
            emailError.classList.remove('right');
        } else {
            emailError.innerHTML = 'Email введен верно!';
            this.classList.remove('check-error');
            emailError.classList.add('right');
        }
    }

    function buttonClick(e) {
        if (firstName.value === '' || phone.value === '' || email.value === '') {
            submitError.innerHTML = '\u2612 Заполните все поля!';
            firstName.classList.add('check-error');
            phone.classList.add('check-error');
            email.classList.add('check-error');
            e.preventDefault();
        } else if (!validFirstName.test(firstName.value)) {
            submitError.innerHTML = 'Проверьте поле ИМЯ!';
            e.preventDefault();
        } else if (!validPhone.test(phone.value)) {
            submitError.innerHTML = 'Проверьте поле ТЕЛЕФОН!';
            e.preventDefault();
        } else if (!validEmail.test(email.value)) {
            submitError.innerHTML = 'Проверьте поле EMAIL!';
            e.preventDefault();
        } else {
            alert('Ваши данные оправлены!');
        }
    }

    firstName.addEventListener('input', validationFirstName);
    phone.addEventListener('input', validationPhone);
    email.addEventListener('input', validationEmail);
    button.addEventListener('click', buttonClick);
});