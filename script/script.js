'use strict'

const burgerMenu = document.querySelector('.menu__burger'),
   menu = document.querySelector('.menu'),
   menuItem = document.querySelectorAll('.menu__i'),
   love = document.querySelector('.love'),
   searchSmall = document.querySelector('.search__small'),
   headerSearch = document.querySelector('.header__search'),
   headerBtn = document.querySelector('.header__btn'),
   headerInput = document.querySelector('.header__input');





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


// ставим и убираем лайк
love.addEventListener('click', (e) => {
   const target = e.target;
   if (target.classList.contains('love')) {
      love.innerHTML = `
            <img src="./image/header/5.svg" alt="5">
      `;
   } else {
      love.innerHTML = `
            <img src="./image/header/4.svg"  class="love" alt="4">
      `;
   }
});


// открытие большой формы поиска

searchSmall.addEventListener('click', () => {
   headerSearch.style.display = 'block';
   searchSmall.style.display = 'none';
});

// закрытие большой строки поиска по кнопке и вне формы поиска

document.addEventListener('mousedown', (e) => {
   if (e.target.closest('.header__search') === null || e.target.closest('.header__btn')) {
      headerSearch.style.display = 'none';
      searchSmall.style.display = 'block';
      headerInput.value = '';
   }
});