'use strict';

const programAccordions = document.querySelectorAll('.program__item');
const answersAccordions = document.querySelectorAll('.accordion__item');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');


// const answersAccordions = document.querySelector('.answers__accordion');
//
//
// answersAccordions.addEventListener("click", function(event) {
//   console.log(event.target);
//   if (event.target.className === 'accordion__item-tile') {
//     event.target.parentElement.classList.toggle("active");
//   }else if ((event.target.className.baseVal === 'accordion__arrow') || (event.target.className.baseVal === 'accordion__arrow')) {
//     event.target.parentElement.offsetParent.classList.toggle("active");
//   }
// });

//аккордион блока програм
for (let i = 0; i < programAccordions.length; i++) {
  programAccordions[i].addEventListener("click", function (event) {
    if (event.target.className === 'program-toggle') {
      this.classList.toggle("active");
    }

  });
}

// аккардион блока ответов

for (let i = 0; i < answersAccordions.length; i++) {
  answersAccordions[i].addEventListener("click", function (event) {
    console.log(event.target.className);
    if ((event.target.className === 'accordion__item-title') || (event.target.className.animVal === 'accordion__arrow')) {
      this.classList.toggle("active");
    }
  });
}

// главное меню

function onMouseDownNavToggle() {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
    // pageHeaderWrapper.classList.add("page-header__wrapper--menu-open");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
    // pageHeaderWrapper.classList.remove("page-header__wrapper--menu-open");
  }
}

mainNavToggle.addEventListener('mousedown', onMouseDownNavToggle);


$('.photo-gallery__list').slick({
  infinite: true,
  slidesToShow: 4,
  arrows: true,
  appendArrows: $('.photo-gallery__arrows'),
  prevArrow: $('.arrow__left'),
  nextArrow: $('.arrow__right'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]

});

$('.certificate__gallery').slick({
  infinite: true,
  slidesToShow: 4,
  arrows: true,
  appendArrows: $('.certificate__arrows'),
  prevArrow: $('.certificate__arrow-left'),
  nextArrow: $('.certificate__arrow-right'),
  centerPadding: '1px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3
      }
    },
  ]

});


$('.comment__list').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  leftMode: true,
  variableWidth: true,
  appendArrows: $('.comment__arrows'),
  prevArrow: $('.arrow__left'),
  nextArrow: $('.arrow__right'),

});
