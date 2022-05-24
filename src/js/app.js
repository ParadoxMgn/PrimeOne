import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import * as burger from "./modules/burger.js";
burger.isBurger();
import * as responsive from "./modules/responsive.js";
responsive.adaptive_function();
/* import * as img from "./modules/ibg.js";
img.ibg(); */


// Подключение слайдера
// import Swiper, {Navigation, Pagination} from 'swiper';

// const swiper = new Swiper();

const clickUps = document.querySelector('.scroll-up');
window.addEventListener('scroll', scrollUp);
clickUps.addEventListener('click', times);

function scrollUp() {
  const scroll = document.querySelector('.scroll-up');
  setTimeout(10);
  if(window.pageYOffset >= 200 ){
    scroll.classList.add('active');
  } else {
    scroll.classList.remove('active');
  }
}

function clickUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }
  )
}

function times() {
  setTimeout(clickUp, 150);
}

