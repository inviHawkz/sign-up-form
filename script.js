const password = document.querySelector('#password');
const password_cf = document.querySelector('#cfpassword');
const error = document.querySelector('#password + div')

error.classList.add('error');

window.addEventListener('keyup', password_compare);

function password_compare() {
    if (password.value === password_cf.value && password.value !== '') error.classList.remove('error');
}