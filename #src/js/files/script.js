
let burger = document.querySelector('.icon-menu');
let burger_menu = document.querySelector('.menu__body');
let body = document.querySelector('body');

burger.onclick = function () {
    burger.classList.toggle('_active');
    burger_menu.classList.toggle('_active');
    body.classList.toggle('lock');
}

