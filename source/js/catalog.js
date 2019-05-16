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
