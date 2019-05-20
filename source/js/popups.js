'use strict';

function closePopup () {
  popups.forEach(function (item) {
    if (item.classList.contains('js-show')) {
      item.classList.remove('js-show');
    }
  })
}

var popups = document.querySelectorAll('.popups__popup-overlay');
var closeButtons = document.querySelectorAll('.closeButton');
var overlays = document.querySelectorAll('.popups__popup-overlay');
var cityButton = document.querySelector('.main-info__different-city');
var cityPopup = document.querySelector('.city__overlay');

var callbackButton = document.querySelector('.main-info__order-callback');
var callbackPopup = document.querySelector('.callback__overlay');

var authButton = document.querySelectorAll('.sign-in');
var authPopup = document.querySelector('.auth__overlay');

var quickViewButton = document.querySelectorAll('.js-quick-view');
var quickViewOverlay = document.querySelector('.quick-view__overlay');

closeButtons.forEach((function (item) {
  item.addEventListener('click', closePopup)
}));

overlays.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popups__popup-overlay')) {
      closePopup();
    }
  })
});

document.addEventListener('keydown', function (evt) {
  if (evt.code === 'Escape') {
    closePopup();
  }
});

cityButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  cityPopup.classList.add('js-show');
});

callbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  callbackPopup.classList.add('js-show');
});

authButton.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    authPopup.classList.add('js-show');
  });
});

quickViewButton.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    quickViewOverlay.classList.add('js-show');
  });
});

//Смена изображения в быстром просмотре

var mainImg = document.querySelector('.popup-quick-view__main-img');
var miniatures = document.querySelectorAll('.popup-quick-view__img-preview');
var srcs = ['quick-view-photo.jpg', 'quick-view-2.png', 'quick-view-3.png'];

miniatures.forEach(function (item, index) {
  item.addEventListener('click', function () {
    mainImg.src = 'img/' + srcs[index];
  })
});

//Смена полей входа и регистрации
var formButtons = document.querySelectorAll('.popup-auth__button');
var forms = document.querySelectorAll('.popup-auth__form');

formButtons.forEach(function (item, index) {
  item.addEventListener('click', function () {
    if (!item.classList.contains('js-active')) {
      formButtons.forEach(function (item, index) {
        item.classList.remove('js-active');
        forms[index].classList.remove('js-show');
      });
      item.classList.add('js-active');
      forms[index].classList.add('js-show');
    }
  })
});
