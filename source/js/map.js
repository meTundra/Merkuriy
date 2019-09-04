// ymaps.ready(function() {
//   var map = new ymaps.Map(iframe, {
//     center: [56.319000, 44.0109000],
//     zoom: 19
//   });
//
//   var placemark = new ymaps.Placemark([56.319005, 44.011218]);
//
//   var geoObject = new ymaps.GeoObject({
//     geometry: {
//       type: "Polygon",
//       coordinates: [
//         // Координаты вершин внешнего контура.
//         [
//           [56.319071, 44.011248],
//           [56.318971, 44.011318],
//           [56.319020, 44.011540],
//           [56.319046, 44.011539],
//           [56.319147, 44.011463],
//           [56.319100, 44.011239],
//         ],
//       ],
//     },
//     properties:{
//       balloonContent: "Многоугольник"
//     }
//   }, {
//     fillColor: '#FFFFFF',
//     strokeColor: '#0000FF',
//     opacity: 0.5,
//     strokeWidth: 2,
//     strokeStyle: 'solid'
//   });
//
//   map.geoObjects.add(geoObject);
//   map.geoObjects.add(placemark);
// });
//
// var iframe = document.querySelector(".map");
