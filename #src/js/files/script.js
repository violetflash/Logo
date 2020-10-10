//(SCRIPTS) =====================================================================================
let burgerHeader = document.querySelector('.menu__icon');

let burgerHeaderMenu = document.querySelector('.menu__body');

// let body = document.querySelector('body');

burgerHeader.addEventListener("click", function (e) {
    burgerHeader.classList.toggle('_active');
    burgerHeaderMenu.classList.toggle('_active');
    // body.classList.toggle('lock');
});


let burgerCatalog = document.querySelector('.catalog-menu__burger');
let burgerCatalogBlock = document.querySelector('.catalog-menu__head');
let burgerCatalogBody = document.querySelector('.catalog-menu__body');


burgerCatalogBlock.addEventListener("click", function (e) {
    burgerCatalog.classList.toggle('_active');
    _slideToggle(burgerCatalogBody);
});


//Выезд меню по наведнию + мобилка

if (isMobile.any()) {
    let menuParents = document.querySelectorAll('.catalog-menu__parent .catalog-menu__link');
    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("click", function (e) {
            e.preventDefault();
            menuParent.classList.toggle('_active');

            let menuItems = document.querySelectorAll('.submenu__item');
            let menuItem = menuItems[index];

            _slideToggle(menuItem);


        });

    }

} else {

    let menuParents = document.querySelectorAll('.catalog-menu__parent');

    let submenuItems = document.querySelectorAll('.submenu__item');

    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("mouseenter", function (e) {
            menuParent.classList.add('_active')
        });

        menuParent.addEventListener("mouseleave", function (e) {
            menuParent.classList.remove('_active')
        });
    }
}

//SEARCH section

//toggle checkbox box
if (document.querySelector('.search')) {

    let searchSelectTitle = document.querySelector('.search__title');
    let searchSelectBox = document.querySelector('.categories-search');
    searchSelectTitle.addEventListener('click', function (e) {
        searchSelectTitle.classList.toggle('_active');
        _slideToggle(searchSelectBox);
    });


//Calculating choices (checked checkboxes)
    let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

    for (let index = 0; index < checkboxCategories.length; index++) {
        const checkboxCategory = checkboxCategories[index];
        checkboxCategory.addEventListener('change', function (e) {
            checkboxCategory.classList.toggle('_active');

            let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

            if (checkboxActiveCategories.length > 0) {
                searchSelectTitle.classList.add('_selections');
                let searchChoices = document.querySelector('.search__choice');
                searchChoices.innerHTML = searchChoices.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
            } else {
                searchSelectTitle.classList.remove('_selections')
            }
        });
    }


//check/uncheck all checkboxes
    let checkboxCategoryReal = document.querySelectorAll('.categories-search__checkbox-input');

    let searchCheckAll = document.querySelector('.categories-search__check-all');

    let searchUncheckAll = document.querySelector('.categories-search__uncheck-all');


//check all button

    searchCheckAll.addEventListener("click", function (e) {

        for (let index = 0; index < checkboxCategoryReal.length; index++) {
            checkboxCategoryReal[index].checked = true;
        }

        //sync with choices counter
        for (let index = 0; index < checkboxCategories.length; index++) {
            const checkboxCategory = checkboxCategories[index];
            checkboxCategory.classList.add('_active');

            let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

            if (checkboxActiveCategories.length > 0) {
                searchSelectTitle.classList.add('_selections');
                let searchChoices = document.querySelector('.search__choice');
                searchChoices.innerHTML = searchChoices.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
            } else {
                searchSelectTitle.classList.remove('_selections')
            }
        }
    });


//uncheck
    searchUncheckAll.addEventListener("click", function (e) {
        // searchSelectTitle.classList.add('_selections')

        for (let index = 0; index < checkboxCategoryReal.length; index++) {
            checkboxCategoryReal[index].checked = false;
        }

        //sync with choices counter
        for (let index = 0; index < checkboxCategories.length; index++) {
            const checkboxCategory = checkboxCategories[index];
            checkboxCategory.classList.remove('_active');

            let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

            if (checkboxActiveCategories.length > 0) {
                searchSelectTitle.classList.add('_selections');
                let searchChoices = document.querySelector('.search__choice');
                searchChoices.innerHTML = searchChoices.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
            } else {
                searchSelectTitle.classList.remove('_selections')
            }
        }
    });
}

if (document.querySelector('.price-filter')) {

    const priceSlider = document.querySelector('.price-filter__slider');

    noUiSlider.create(priceSlider, {
        connect: true,
        tooltips: true,
        start: [0, 100000],
        step: 100,
        // margin: 5,
        range: {
            'min': [0],
            'max': [200000]
        },
        format: {
            from: function (value) {
                return parseInt(value);
            },
            to: function (value) {
                return parseInt(value);
            }
        }
    });

    var valueFrom = document.querySelector('.values__from'),
        valueTo = document.querySelector('.values__to');

// When the slider value changes, update the input and span
    priceSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            valueTo.value = values[handle];
        } else {
            valueFrom.value = values[handle];
        }
    });

    valueFrom.addEventListener('change', function () {
        priceSlider.noUiSlider.set([this.value]);
    });

    valueTo.addEventListener('change', function () {
        priceSlider.noUiSlider.set([valueFrom.value, this.value]);
    });

// sliderFormat.noUiSlider.on('update', function (values, handle) {
//   inputFormat.value = values[handle];
// });
//
// inputFormat.addEventListener('change', function () {
//   sliderFormat.noUiSlider.set(this.value);
// });

    /*
    setButton.addEventListener('click', function () {
      animatedSlider.noUiSlider.set(60);
      unAnimatedSlider.noUiSlider.set(60);
    })
    */

}
//= (/SCRIPTS) =====================================================================================

