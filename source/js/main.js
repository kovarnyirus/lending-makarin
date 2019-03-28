'use strict';

const programAccordions = document.querySelectorAll('.program__item');
const answersAccordions = document.querySelectorAll('.accordion__item');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const page = document.querySelector('body');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup-overlay');


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


//popup

function onMouseDownBtnForm(event) {
  if(typeof(event.target.className) === "string"){
    if (event.target.className.indexOf('btn-form') !== -1) {
      popup.classList.remove("popup__closed");
      popup.classList.add("popup__opened");
      popupOverlay.classList.remove("popup-overlay--opened");
      popupOverlay.classList.add("popup-overlay--opened");
    } else if((event.target.className === 'popup__close-btn') || (event.target.className === 'popup__go-back')){
      popup.classList.add("popup__closed");
      popup.classList.remove("popup__opened");
      popupOverlay.classList.add("popup-overlay--opened");
      popupOverlay.classList.remove("popup-overlay--opened");
    }
  }

}

page.addEventListener('mousedown', onMouseDownBtnForm);


//Mask for input
$('[name="phone"]').mask('+7 (999) 999-99-99');



////////////reedmore

$('.comment__item-text').readmore({
  speed: 75,
  collapsedHeight: 95,
  moreLink: '<a href="" class="link comment__item-all-text">Весь отзыв\n' +
    '            <svg width="7px" height="10px" class="comment__item-all-text-ico">\n' +
    '              <use xlink:href="#icon-arrow-right"></use>\n' +
    '            </svg>\n' +
    '          </a>',
  lessLink: '<a href="#" class="open-txt"><span>Свернуть</span></a>',
  collapsedClass: 'hide-text',
});


$('.comment__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  leftMode: true,
  variableWidth: true,
  arrows: true,
  appendArrows: $('.comment__arrows'),
  prevArrow: $('.comment__arrow-left'),
  nextArrow: $('.comment__arrow-right'),
});


$('.photo-gallery__list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  appendArrows: $('.photo-gallery__arrows'),
  prevArrow: $('.photo-gallery-arrow-left'),
  nextArrow: $('.photo-gallery-arrow-right'),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3
      }
    },
  ]

});





// плавный переход по якорям

$(document).ready(function () {
  $(".main-nav__list ").on("click", "a", function (event) {
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });
});


//////////////отправка формы


function formHandler(selector) {

  // debugger;
  $(selector).on('submit', function (e) {

    e.preventDefault();

    var _this = $(this),
      $nameField = _this.find('input[name=name]'),
      $emailField = _this.find('input[name=email]'),
      $phoneField = _this.find('input[name=phone]');


    if ($emailField.val() === '') {
      $emailField.addClass('has-error');
    }
    if ($phoneField.val() === '') {
      $phoneField.addClass('has-error');
    }
    else if ($emailField.val() !== '' && $phoneField.val() !== '') {

      var ajaxdata = 'name=' + $nameField.val() + '&email=' + $emailField.val() + '&phone=' + $phoneField.val();

      $.ajax({
        type: "POST",
        url: "form_handler.php",
        data: ajaxdata,
        success: function ($output) {
          $('.popup__wrapper').html($output);
        },
        error: function (error) {
          console.log(error);
        }
      });
    }
  });
}


formHandler('.callback-form');

function getPageScroll() {
  return window.pageYOffset;
}

$(window).on('scroll', function (e) {
  var $header = $(".header__fixed-wrap");
  if (getPageScroll() > 120) {
    $header.addClass("fixed").fadeIn();

  } else {
    $header.removeClass("fixed");
  }
});

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,

  fixedContentPos: false
});
