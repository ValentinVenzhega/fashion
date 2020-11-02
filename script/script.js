'use strict'

const burgerMenu = document.querySelector('.menu__burger'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__i');


//открытие и закртие меню и бургера

burgerMenu.addEventListener('click', () => {
   burgerMenu.classList.toggle('menu__burger_active');
   menu.classList.toggle('menu_active');
});


//  закрытие меню и бургера по клику на элемент меню

menuItem.forEach(function (e) { 
   e.addEventListener('click', () => {
      burgerMenu.classList.toggle('menu__burger_active');
      menu.classList.toggle('menu_active');
   });
});



