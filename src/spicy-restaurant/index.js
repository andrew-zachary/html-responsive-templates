import './styles/index.scss';
import ScrollMagicx from 'scrollmagic';
import { CountUp } from 'countup.js';
import { Collapse } from 'bootstrap';

//menu collapse
let menu__trigger_btn = new Collapse(window.menu__trigger_btn);
let collapse_target = window["collapse-target"];
collapse_target.addEventListener('hidden.bs.collapse', function () {
    window["res-main-menu"].style.height = "0vh";
});
collapse_target.addEventListener('hide.bs.collapse', function () {
    window["res-main-menu"].style.backgroundColor = "#2f2f2f00";
    document.body.style.overflowY = "unset";
});
collapse_target.addEventListener('show.bs.collapse', function () {
    window["res-main-menu"].style.backgroundColor = "#2f2f2f";
    document.body.style.overflowY = "hidden";
    window["res-main-menu"].style.height = "100vh";
});

//scroll-magic
const controller = new ScrollMagicx.Controller({
    globalSceneOptions: {
        reverse: false,
        triggerHook: 'onCenter'
    }
});
//popular menu theme
new ScrollMagicx.Scene({ triggerElement: "#counters-list" })
    .on('enter', () => {
        const count_duration_sec = 4;
        const countUp1 = new CountUp('target1', 123, {
            duration: count_duration_sec
        });
        const countUp2 = new CountUp('target2', 100, {
            duration: count_duration_sec
        });
        const countUp3 = new CountUp('target3', 300, {
            duration: count_duration_sec
        });
        const countUp4 = new CountUp('target4', 30, {
            duration: count_duration_sec
        });
        countUp1.start();
        countUp2.start();
        countUp3.start();
        countUp4.start();
    })
    .addTo(controller);