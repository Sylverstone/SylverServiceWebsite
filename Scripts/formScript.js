let form = document.querySelector("form");
let body = document.querySelector("body");

function y(x,m,b)
{
    return m * x + b; 
}

body.onmousemove =  (ev) => {
    //arriere plan
    let x = ev.pageX;
    let y_ = ev.pageY;
    let min = -1;
    let max = 1;
    let shadowDiffuse = 2;
    let maxPage = document.documentElement.scrollWidth;
    let maxPageY = document.documentElement.scrollHeight;
    let positionXShadow = y(x,(min-max)/-maxPage,min);
    let positionYShadow = y(y_,(min-max)/-maxPageY,min);
    form.style.boxShadow = `${positionXShadow}em ${positionYShadow}em ${shadowDiffuse}em black`
}

