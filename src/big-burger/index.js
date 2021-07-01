import './styles/index.scss';
import { Collapse } from 'bootstrap';
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

let menu__trigger_btn = new Collapse(window.menu__trigger_btn);

let swiper_ins = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1200: {
            width: 1200,
            slidesPerView: 3,
            spaceBetween: 24
        },
        768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 24
        },
        300: {
            width: 300,
            slidesPerView: 1,
            spaceBetween: 24
        }
    }
});