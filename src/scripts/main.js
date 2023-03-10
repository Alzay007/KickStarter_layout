import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.getElementById('form').addEventListener('submit',
  (event) => {
    event.preventDefault();
    document.getElementById('form').reset();
  }
);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.onscroll = function () {
  if (window.innerWidth >= 768 && window.scrollY >= 140
    + document.getElementById('menu').clientHeight
    + document.getElementById('header').clientHeight) {
    document.getElementById('menu').classList.add('menu--sticky');
  } else {
    document.getElementById('menu').classList.remove('menu--sticky');
  }
};
