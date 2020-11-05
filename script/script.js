'use strict'

const burgerMenu = document.querySelector('.menu__burger'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__i'),
      love = document.querySelector('.love');




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


// 1-й способ
love.addEventListener('click', (e) => {
   const target = e.target;
   if(target.classList.contains('love')) {
      love.innerHTML = `
            <img src="./image/header/5.svg" alt="5">
      `;
   } else {
      love.innerHTML = `
            <img src="./image/header/4.svg"  class="love" alt="4">
      `;
   }
});