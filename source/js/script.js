'use strict';

//Окно поиска
var searchButton = document.querySelector('.main-nav__search-button');
var searchInput = document.querySelector('.main-nav__search-container');

searchButton.addEventListener('click', function (evt) {
  if (window.innerWidth < 760) {
    evt.preventDefault();
    searchInput.classList.toggle('js-show');
    searchInput.firstChild.placeholder = 'Поиск';
  }
});

//Окно нафигации по категориям
var openNav = document.querySelector('.main-nav__open-nav');
var categories = document.querySelector('.main-nav__categories');
var categoriesItems = document.querySelectorAll('.nav-categories__link');
var categoriesNestedLists = document.querySelectorAll('.nav-categories__nested-list');
var categoriesNestedItems = document.querySelectorAll('.nav-categories__nested-item');
var categoriesDeepLists = document.querySelectorAll('.nav-categories__deep-list');

openNav.addEventListener('click', function (evt) {
  if (window.innerWidth < 760) {
    evt.preventDefault();
    categories.classList.toggle('js-show');
  }
});

categoriesItems.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('nav-categories__link') && window.innerWidth < 760) {
      categoriesNestedLists[index].classList.toggle('js-show');

      categoriesNestedLists.forEach(function (item) {
        if (item.classList.contains('js-show') && item !== categoriesNestedLists[index]) {
          item.classList.remove('js-show');
        }
      });
    }
  })
});

categoriesNestedItems.forEach(function (item, index) {
  item.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('nav-categories__nested-item') && window.innerWidth < 760) {
      categoriesDeepLists[index].classList.toggle('js-show');

      categoriesDeepLists.forEach(function (item) {
        if (item.classList.contains('js-show') && item !== categoriesDeepLists[index]) {
          item.classList.remove('js-show');
        }
      });
    }
  })
});

//Поп апы
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

var quickViewButton = document.querySelectorAll('.popular-product__quick-view');
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

console.log(mainImg);

miniatures.forEach(function (item, index) {
  item.addEventListener('click', function () {
    mainImg.src = 'img/' + srcs[index];
  })
});

//Параллакс
var banner = document.querySelector('.banner');
window.addEventListener("scroll", function () {
  if (window.innerWidth > 760) {
    banner.style.backgroundPosition = '50%' + window.scrollY / -4 + 'px';
  }
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
      console.log(bannerList.clientWidth);
    })
  }


});
