let burger_header = document.querySelector('.menu__icon');

let burger_catalog = document.querySelector('.catalog-menu__burger');

let header_burger_menu = document.querySelector('.menu__body');

let catalog_burger_body = document.querySelector('.catalog-menu__body');

let body = document.querySelector('body');

let catalog_link = document.querySelector('.catalog-menu__link');

burger_header.onclick = function () {
  burger_header.classList.toggle('_active');
  header_burger_menu.classList.toggle('_active');
  body.classList.toggle('lock');
}

burger_catalog.onclick = function () {
  burger_catalog.classList.toggle('_active');
  catalog_burger_body.classList.toggle('opened');
}

// catalog_link.onclick = function () {
//   catalog_link.classList.add('_active')
//     // document.querySelectorAll('.catalog-menu__item').classList.remove('_active');
//     // this.classList.toggle('_active')
// }



//ЖЕКИНЫ

let menuParents = document.querySelectorAll('.catalog-menu__parent');

let submenuItems = document.querySelectorAll('.submenu__item');

for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("mouseenter", function(e) {
        menuParent.classList.add('active')
    });

    menuParent.addEventListener("mouseleave", function(e) {
      menuParent.classList.remove('active')
    });
}
