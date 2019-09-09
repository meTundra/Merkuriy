'use strict';

//Параллакс
var banner = document.querySelector('.banner');
window.addEventListener("scroll", function () {
  if (window.innerWidth > 760) {
    banner.style.backgroundPositionY = window.scrollY / -4 + 'px';
  }
});
