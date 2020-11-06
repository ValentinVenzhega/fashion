'use strict'

const burgerMenu = document.querySelector('.menu__burger'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__i'),
      love = document.querySelector('.love'),
      searchSmall = document.querySelector('.search__small'),
      headerIcon = document.querySelector('.header__icon');





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


// открытие большой строки поиска


searchSmall.addEventListener('click', () => {

   const div = document.createElement('div');
   div.className= 'search__big';
   headerIcon.prepend(div);
   const searchBig = document.querySelector('.search__big');
   searchBig.innerHTML = `
      <div class="header__search footer__search">
         <input type="text" class="header__input " placeholder="Your Email Address">
         <button class="header__btn">
            <div class="icon__img icon__small">
               <img src="./image/header/2.svg" alt="2">
            </div> 
         </button>
      </div>
   `;
   searchSmall.remove();
   // searchSmall.remove();
});

