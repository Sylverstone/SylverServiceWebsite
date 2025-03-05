"use strict";
const transformImage = (result) => {
    const images = result;
    images.forEach((img) => {
        if (img instanceof HTMLElement) {
            const link = img.getAttribute("src");
            if (link)
                img.onclick = () => window.open(link, '_blank');
        }
    });
};
const allImage = document.querySelectorAll('img:not([clickEvent="false"])');
allImage && transformImage(allImage);
const go_to = (Element) => {
    const element = document.getElementById(Element);
    if (!element)
        return;
    const rect = element.getBoundingClientRect();
    const asideFlottant = document.querySelector(`.fixe-asideFlottant`);
    //900 est la taille des tel mobiles utilsé en css
    if (!asideFlottant)
        return;
    let offset = screen.width <= 900 ? asideFlottant.getBoundingClientRect().height : 50;
    if (asideFlottant instanceof HTMLElement) {
        console.log(element.getBoundingClientRect().top);
        window.scrollTo({
            behavior: "smooth",
            top: rect.y + window.scrollY - offset - 30
        });
    }
};
const mainUl = document.querySelector('.main-ul');
if (mainUl) {
    let allLi2 = mainUl.querySelectorAll('li');
    allLi2.forEach(li => {
        li.onclick = () => go_to(li.className);
    });
}
const cancel = (origineDisplay, canceller) => {
    const ListeDisplay = ["flex", "block", "grid", "inline-flex", "inline-block"];
    const asideFlottant = document.querySelector(`.fixe-asideFlottant`);
    if (!(asideFlottant instanceof HTMLElement))
        return;
    const ul = asideFlottant.querySelector("ul");
    if (!(ul instanceof HTMLElement))
        return;
    const enfantUL = ul.querySelectorAll("*");
    if (asideFlottant instanceof HTMLElement && canceller instanceof HTMLElement) {
        const valueDisplay = window.getComputedStyle(enfantUL[0]).display;
        if (ListeDisplay.includes(valueDisplay)) {
            enfantUL.forEach(li => {
                if (li instanceof HTMLElement)
                    li.style.display = "none";
            });
            canceller.className = "canceller-active";
            canceller.setAttribute("src", "/Images/oeil.png");
        }
        else {
            enfantUL.forEach(li => { if (li instanceof HTMLElement)
                li.style.display = `${origineDisplay}`; });
            canceller.className = "cancel-aside";
            canceller.setAttribute("src", "/Images/croix.png");
        }
    }
};
const allCanceller = document.querySelectorAll("[class|='cancel']");
allCanceller.forEach(elt => {
    const valueDisplay = elt.getAttribute("valueDisplay");
    if (elt instanceof HTMLElement && valueDisplay)
        elt.onclick = () => cancel(valueDisplay, elt);
});
