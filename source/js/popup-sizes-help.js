var sizesButton = document.querySelectorAll('.js-sizes-help');
var sizesPopup = document.querySelector('.popup-sizes__overlay');

sizesButton.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    sizesPopup.classList.add('js-show');
  })
});
