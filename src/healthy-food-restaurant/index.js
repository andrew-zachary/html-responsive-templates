import './styles/index.scss';
import ScrollMagicx from 'scrollmagic';
import { Carousel, Collapse } from 'bootstrap';

//collapse
let menu__trigger_btn = new Collapse(window.menu__trigger_btn);

//carousel
const carousel = new Carousel(window.carouselExampleIndicators);

//init animation
document.body.style.overflow = "hidden";
window.onload = function () {
    document.body.style.overflow = "unset";
    document.getElementById("healthy_food_project").style.opacity = 1;
    window.hfr_main_heading.classList.add("animate__slideInDown");
    window.hfr_sup_heading.classList.add("animate__slideInUp");
}

//scroll-magic
const controller = new ScrollMagicx.Controller({
    globalSceneOptions: {
        reverse: false
    }
});
//popular menu theme
new ScrollMagicx.Scene({ triggerElement: "#menu-list" })
    .setClassToggle("#menu-list", "stagger-list")
    .addTo(controller);
//discount-row-1
new ScrollMagicx.Scene({ triggerElement: "#discount-row-1" })
    .setClassToggle("#discount-row-1", "animate__fadeInDown")
    .addTo(controller);
//discount-row-2
new ScrollMagicx.Scene({ triggerElement: "#discount-row-2" })
    .setClassToggle("#discount-row-2", "animate__fadeInUp")
    .addTo(controller);
//order now steps
new ScrollMagicx.Scene({ triggerElement: "#steps" })
    .setClassToggle("#steps", "steps-stagger-list")
    .addTo(controller);
//free delivery
new ScrollMagicx.Scene({ triggerElement: "#free-delivery" })
    .setClassToggle("#free-delivery", "animate__fadeInDown")
    .addTo(controller);
//testimonial
new ScrollMagicx.Scene({ triggerElement: "#testimonial-text" })
    .setClassToggle("#testimonial-text", "animate__fadeInLeft")
    .addTo(controller);
//footer
new ScrollMagicx.Scene({ triggerElement: "#rotated-bg-zoom-in" })
    .setClassToggle("#rotated-bg-zoom-in", "animate__fadeIn")
    .addTo(controller);