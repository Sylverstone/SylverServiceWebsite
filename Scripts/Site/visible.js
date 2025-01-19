const body = document.querySelector("body");



const AllElements = body.querySelectorAll(":not(script):not(.footerIMG)");

AllElements.forEach(element => 
    {
        if(element instanceof HTMLElement)
        {            
            const computedStyle = window.getComputedStyle(element).transition;
            if(window.getComputedStyle(element) !== "all")
            {
                element.style.transition = `${computedStyle} ease, opacity 1s ease`
            }
            else{
                element.style.transition = "opacity 500ms ease";
            }
        }
    });


function isVisible(element)
{
    if(element instanceof HTMLElement)
    {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight //retrocompatibilté tah les fou;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth //retrocompatibilté tah les fou;

        return rect.top <= windowHeight && rect.left  <= windowWidth
    }
}

function lookIfvisible(AllElements)
{
    AllElements.forEach(element => {
        if(isVisible(element) === true)
        {
            element.style.opacity = "1";
        }
        else{
            element.style.opacity = "0";
        }
    })
}

body.onscroll = () =>
{
    lookIfvisible(AllElements);
}


body.onload = () =>
{
    lookIfvisible(AllElements);
}