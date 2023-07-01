'use strict'

const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__nav')

headerBurger.addEventListener('click', function () {
  headerMenu.classList.toggle('_active-menu')
  headerBurger.classList.toggle('_burger-click')
})

document.addEventListener('mousemove', parallax)
function parallax(e) {
  document.querySelectorAll('._parallax').forEach(function (move) {
    let moving_value = move.getAttribute('data-value')
    let x = (e.clientX * moving_value) / 200
    let y = (e.clientY * moving_value) / 200
    move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
  })
}

const accordion = document.querySelectorAll('.faq__item')

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('_faq-active')
  })
}

const accordionSingle = document.querySelectorAll('.faq-single__item')

for (let i = 0; i < accordionSingle.length; i++) {
  accordionSingle[i].addEventListener('click', function () {
    this.classList.toggle('_faq-single-active')
  })
}


