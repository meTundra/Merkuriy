"use strict";var catalogLinks=document.querySelectorAll(".catalog-categories__nested-link"),catalogLists=document.querySelectorAll(".catalog-categories__deep-list");catalogLinks.forEach(function(t,e){t.addEventListener("click",function(t){t.preventDefault(),catalogLists[e].classList.toggle("js-active")})});var filterOpen=document.querySelector(".category-switchers__button"),filter=document.querySelector(".catalog-filter"),filterClose=document.querySelector(".catalog-filter__close");filterOpen.addEventListener("click",function(){filter.classList.toggle("js-show")}),filterClose.addEventListener("click",function(){filter.classList.toggle("js-show")});var filterButton=document.querySelector(".js-filter"),startPos=filterButton.clientTop;function stickyNav(){window.addEventListener("scroll",function(){window.innerWidth<760&&(window.scrollY>filterButton.clientTop&&!filterButton.classList.contains("sticky")?filterButton.classList.add("sticky"):window.scrollY<startPos&&filterButton.classList.contains("sticky")&&filterButton.classList.remove("sticky"))}),760<window.innerWidth&&filterButton.classList.contains("sticky")&&filterButton.classList.remove("sticky")}console.dir(filterButton),stickyNav();