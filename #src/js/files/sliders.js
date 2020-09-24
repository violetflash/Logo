//BuildSlider - строит HTML конструкцию для свайпера

let sliders = document.querySelectorAll('.swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-container')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-container');
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) { }



if (document.querySelector('.mainslider')) {

  let mainslider = new Swiper('.mainslider__body', {

    // effect: 'fade',
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    // spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    loop: true,

    /*
    touchRatio: 0,
    simulateTouch: false,
    preLoadImages: false,
    lazy: true,
    //Dots
    */
    pagination: {
      el: '.mainslider__dots',
      clickable: true,
    },
    // Arrows

    // navigation: {
    //   nextEl: '.about__more .about__more--next',
    //   prevEl: '.about__more .about__more--prev',
    // },
    // on: {
    //   lazyImageReady: function () {
    //     ibg();
    //   }, 
    // }
  });

  let mainsliderImages = document.querySelectorAll('.mainslider__image');
  let mainsliderDots = document.querySelectorAll('.mainslider__dots .swiper-pagination-bullet');

  for (let index = 0; index < mainsliderImages.length; index++) {
      const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
      mainsliderDots[index].style.backgroundImage =  "url('" + mainsliderImage + "')";    
  }

}