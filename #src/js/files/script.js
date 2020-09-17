
let burger = document.querySelector('.icon-menu');
let burger_menu = document.querySelector('.menu__body');

burger.onclick = function () {
    burger.classList.toggle('_active');
    burger_menu.classList.toggle('_active');
}

