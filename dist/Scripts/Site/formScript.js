"use strict";
let form = document.querySelector("form");
const body2 = document.querySelector("body");
if (body2) {
    function y(x, m, b) {
        return m * x + b;
    }
    body2.onmousemove = (ev) => {
        //arriere plan
        let x = ev.pageX;
        let y_ = ev.pageY;
        let min = -1;
        let max = 1;
        let shadowDiffuse = 2;
        let maxPage = document.documentElement.scrollWidth;
        let maxPageY = document.documentElement.scrollHeight;
        let positionXShadow = y(x, (min - max) / (0 - maxPage), min);
        let positionYShadow = y(y_, (min - max) / (0 - maxPageY), min);
        if (form)
            form.style.boxShadow = `${positionXShadow}em ${positionYShadow}em ${shadowDiffuse}em black`;
    };
}
