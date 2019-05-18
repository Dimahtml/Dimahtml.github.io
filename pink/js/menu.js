'use strict';

// Этот модуль скрывает и показывает элементы меню

var menu = document.querySelector('.menu');
var menuButton = document.querySelector('.menu__btn');

menu.classList.remove('menu--nojs');

if (menu.classList.contains('menu--opened')) {
  menu.classList.remove('menu--opened');
  menu.classList.add('menu--closed');
  menu.classList.remove('menu--colored');
  menu.classList.add('menu--transparent');
};

menuButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    menu.classList.remove('menu--transparent');
    menu.classList.add('menu--colored');
  } else {
    menu.classList.remove('menu--opened');
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--colored');
    menu.classList.add('menu--transparent');
  }
});
