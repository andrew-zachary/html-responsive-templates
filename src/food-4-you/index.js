import "./styles/index.scss";
import { Collapse } from "bootstrap";

window.addEventListener("load", function () {
  let menu__trigger_btn = new Collapse(window.menu__trigger_btn);

  let slides_btns = document.querySelectorAll(".slides-btn");
  let event_slides = document.querySelectorAll(".event-slide");
  slides_btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //reset all btns and slides .
      slider_box.slides_and_btns_reset(event_slides, slides_btns);
      //set current clicked btn active .
      btn.classList.add("active");
      //set picked slide active .
      event_slides.forEach((slide, index) => {
        if (
          slide.getAttribute("data-slide-num") ===
          btn.getAttribute("data-slide-num")
        ) {
          slide.classList.add("active-slide");
          setTimeout(() => {
            slide.querySelector(".active-slide img").style.left = "0";
          }, 10);
          slider_box.asgin_orders(index);
        }
      });
    });
  });
});

class slider_box {
  static slides_and_btns_reset(event_slides, slides_btns) {
    event_slides.forEach((slide, index) => {
      slide.querySelector("img").style.left = "-150px";
      slide.classList.remove("active-slide");
    });
    slides_btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  static asgin_orders(index) {
    if (index === 0) {
      document.querySelector(".event-slide:first-child").style.order = 2;
      document.querySelector(".event-slide:nth-child(2)").style.order = 1;
      document.querySelector(".event-slide:last-child").style.order = 3;
    } else if (index === 1) {
      document.querySelector(".event-slide:first-child").style.order = 1;
      document.querySelector(".event-slide:nth-child(2)").style.order = 2;
      document.querySelector(".event-slide:last-child").style.order = 3;
    } else if (index === 2) {
      document.querySelector(".event-slide:first-child").style.order = 1;
      document.querySelector(".event-slide:nth-child(2)").style.order = 3;
      document.querySelector(".event-slide:last-child").style.order = 2;
    }
  }
}
