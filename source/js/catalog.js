'use strict';

var catalogLinks = document.querySelectorAll('.catalog-categories__nested-link');
var catalogLists = document.querySelectorAll('.catalog-categories__deep-list');

catalogLinks.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    catalogLists[index].classList.toggle('js-active');
  })
});

var filterOpen = document.querySelector('.category-switchers__button');
var filter = document.querySelector('.catalog-filter');
var filterClose = document.querySelector('.catalog-filter__close');

filterOpen.addEventListener('click', function () {
  filter.classList.toggle('js-show');
});

filterClose.addEventListener('click', function () {
  filter.classList.toggle('js-show');
});


//Липкий фильтр

var filterButton = document.querySelector('.js-filter');
var startPos = filterButton.clientTop;
console.dir(filterButton);

function stickyNav () {
  window.addEventListener('scroll', function () {
    if (window.innerWidth < 760) {
      if (window.scrollY > filterButton.clientTop && !filterButton.classList.contains('sticky')) {
        filterButton.classList.add('sticky');
      } else if (window.scrollY < startPos && filterButton.classList.contains('sticky')) {
        filterButton.classList.remove('sticky');
      }
    }
  });

  if (window.innerWidth > 760 && filterButton.classList.contains('sticky')) {
    filterButton.classList.remove('sticky');
  }
}

stickyNav();
