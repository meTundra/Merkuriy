var deliveryButtons = document.querySelectorAll('.product-delivery__button');
var deliverySections = document.querySelectorAll('.js-item');

deliveryButtons.forEach(function (item, index) {
  item.addEventListener('click', function () {
    deliveryButtons.forEach(function (item, index) {
      item.classList.remove('js-active');
      deliverySections[index].classList.add('js-hidden');
    });

    item.classList.add('js-active');
    deliverySections[index].classList.remove('js-hidden');
  })
});
