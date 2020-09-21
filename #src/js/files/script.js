let burgerHeader = document.querySelector('.menu__icon');

let burgerHeaderMenu = document.querySelector('.menu__body');

let body = document.querySelector('body');

burgerHeader.addEventListener("click", function (e) {
  burgerHeader.classList.toggle('_active');
  burgerHeaderMenu.classList.toggle('_active');
  body.classList.toggle('lock');
});


let burgerCatalog = document.querySelector('.catalog-menu__burger');
let burgerCatalogBody = document.querySelector('.catalog-menu__body');

burgerCatalog.addEventListener("click", function (e) {
  burgerCatalog.classList.toggle('_active');
  _slideToggle(burgerCatalogBody);
});


let menuParents = document.querySelectorAll('.catalog-menu__parent');

let submenuItems = document.querySelectorAll('.submenu__item');

for (let index = 0; index < menuParents.length; index++) {
  const menuParent = menuParents[index];
  menuParent.addEventListener("mouseenter", function (e) {
    menuParent.classList.add('active')
  });

  menuParent.addEventListener("mouseleave", function (e) {
    menuParent.classList.remove('active')
  });
}

//SEARCH section
let searchSelectTitle = document.querySelector('.search__title');
let searchSelectBox = document.querySelector('.categories-search');
searchSelectTitle.addEventListener("click", function (e) {
  searchSelectTitle.classList.toggle('_active');
  _slideToggle(searchSelectBox);
});

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
  const checkboxCategory = checkboxCategories[index];
  checkboxCategory.addEventListener("click", function (e) {
    checkboxCategory.classList.toggle('_active');

    let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

    if (checkboxActiveCategories.length > 0) {
      searchSelectTitle.classList.add('_selections');
    } else {
      searchSelectTitle.classList.remove('_selections')
    }
  });
}