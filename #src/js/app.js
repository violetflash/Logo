// @@include('files/regular.js', {})
// @@include('files/script.js', {})
// @@include('files/functions.js', {})
// @@include('files/forms.js', {})
// @@include('files/scroll.js', {})
// @@include('files/dynamic-adapt.js', {})

// @@include('dynamic-adapt.js')

// функция определения поддержки WebP
//Добавляет к <body> класс webp, если браузер поддерживает webp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

let burger = document.querySelector('.icon-menu');
let burger_menu = document.querySelector('.menu__body');

burger.onclick = function () {
    burger.classList.toggle('_active');
    burger_menu.classList.toggle('_active');
}


