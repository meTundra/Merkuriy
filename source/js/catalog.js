var catalogLinks = document.querySelectorAll('.catalog-categories__nested-link');
var catalogLists = document.querySelectorAll('.catalog-categories__deep-list');

catalogLinks.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    catalogLists[index].classList.toggle('js-active');
  })
});
