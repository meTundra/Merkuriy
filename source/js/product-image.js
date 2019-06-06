function zoom(evt){
  var zoomer = evt.currentTarget;
  evt.offsetX ? offsetX = evt.offsetX : offsetX = evt.touches[0].pageX;
  evt.offsetY ? offsetY = evt.offsetY : offsetX = evt.touches[0].pageX;
  x = offsetX / zoomer.offsetWidth * 100;
  y = offsetY / zoomer.offsetHeight * 100;
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

var zoomContainers = document.querySelectorAll('.product-view__zoom');
var minImgs = document.querySelectorAll('.product-view__min-img');

minImgs.forEach(function (item, index) {
  item.addEventListener('click', function () {
    minImgs.forEach(function (item, index) {
      item.classList.remove('js-active');
      zoomContainers[index].classList.remove('js-show');
    });
    item.classList.add('js-active');
    zoomContainers[index].classList.add('js-show');
  })
});

zoomContainers.forEach(function (item) {
  item.addEventListener('mousemove', zoom);
});
