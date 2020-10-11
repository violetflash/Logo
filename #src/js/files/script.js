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


    //check and uncheck all checkboxes
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


    //uncheck all
    searchUncheckAll.addEventListener("click", function (e) {

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

    // When the slider value changes, update the inputs
    priceSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            valueTo.value = values[handle];
        } else {
            valueFrom.value = values[handle];
        }
    });
    //

    //reading data from inputs
    valueFrom.addEventListener('change', function () {
        priceSlider.noUiSlider.set([this.value]);
    });

    valueTo.addEventListener('change', function () {
        priceSlider.noUiSlider.set([valueFrom.value, this.value]);
    });
    //
}

//FILTERS
if (document.querySelector('.filter')) {

    //Toggling main filters box
    let filterTitle = document.querySelector('.filter__title');
    filterTitle.addEventListener('click', function(e) {
        _slideToggle(filterTitle.nextElementSibling)
    });
    //
    
    //Toggling spoilers
    let sectionSpoilers = document.querySelectorAll('.spoiler');
    if (sectionSpoilers.length > 0) {

        for (let i = 0; i < sectionSpoilers.length; i++) {
            let sectionSpoiler = sectionSpoilers[i]

            sectionSpoiler.addEventListener('click', function (e) {
                sectionSpoiler.classList.toggle('active');
                _slideToggle(sectionSpoiler.nextElementSibling);
            });
        }
    }
    //

    //Reset all checkboxes
    let filterReset = document.querySelector('.filter__button--reset');
    filterCheckboxes = document.querySelectorAll('.filter .checkbox__input');

    filterReset.addEventListener("click", function (e) {

        for (let index = 0; index < filterCheckboxes.length; index++) {
            filterCheckboxes[index].checked = false;
        }
    });
    //
}

//CATALOG SORT
if (document.querySelector('.catalog')) {

    //List / Grid switch
    let grid = document.querySelector('.catalog__grid');
    let list = document.querySelector('.catalog__list');

    grid.addEventListener('click', function(e) {
        list.classList.remove('active');
        grid.classList.add('active');
    });

    list.addEventListener('click', function(e) {
        grid.classList.remove('active');
        list.classList.add('active');
    });
}
//= (/SCRIPTS) =====================================================================================

