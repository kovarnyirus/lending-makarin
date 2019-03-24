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
  programAccordions[i].addEventListener("click", function(event) {
    if(event.target.className === 'program-toggle'){
      this.classList.toggle("active");
    }

  });
}

// аккардион блока ответов

for (let i = 0; i < answersAccordions.length; i++) {
  answersAccordions[i].addEventListener("click", function(event) {
    console.log(event.target.className);
    if((event.target.className === 'accordion__item-title') || (event.target.className.animVal === 'accordion__arrow')){
      this.classList.toggle("active");
    }
  });
}

// главное меню

function onMouseDownNavToggle(){
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
