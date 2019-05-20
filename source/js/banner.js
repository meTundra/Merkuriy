'use strict';

//Слайдер
var bannerList = document.querySelector('.banner__list');
var bannerItems = document.querySelectorAll('.banner__item');
var bannerContent = document.querySelector('.banner__content');
var translate = 0;
var counter = 1;

bannerContent.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('banner__button--right')) {
    counter++;
    translate -= bannerList.clientWidth;
  } else if (evt.target.classList.contains('banner__button--left')) {
    counter--;
    translate += bannerList.clientWidth;
  }

  if (counter > bannerItems.length) {
    counter = 1;
    translate = 0;
    bannerItems.forEach(function (item) {
      item.style.transform = 'translateX(' + translate + ')';
    });
  } else if (counter < 1) {
    counter = 3;
    translate = bannerList.clientWidth * (bannerItems.length - 1) * -1;

    bannerItems.forEach(function (item) {
      item.style.transform = 'translateX(' + translate + 'px)';
    });
  } else {
    bannerItems.forEach(function (item) {
      item.style.transform = 'translateX(' + translate + 'px)';
    })
  }
});

//Параллакс
var banner = document.querySelector('.banner');
window.addEventListener("scroll", function () {
  if (window.innerWidth > 760) {
    banner.style.backgroundPositionY = window.scrollY / -4 + 'px';
  }
});
