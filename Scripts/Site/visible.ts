import { print } from "../App/devFonction.js";

const body = document.querySelector("body");

if(body)
{
    const AllElements = body.querySelectorAll(":not(script):not(.footerIMG)");

    function isVisible(element : Element)
    {
        if(element instanceof HTMLElement)
        {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight //retrocompatibilté tah les fou;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth //retrocompatibilté tah les fou;
    
            return rect.top <= windowHeight && rect.left  <= windowWidth
        }
    }
    
    function lookIfvisible(AllElements : NodeListOf<Element>)
    {
        AllElements.forEach(element => {
            if(isVisible(element))
            {
                if(element instanceof HTMLElement)
                {
                    element.classList.add("visible");
                }
                    
            }
            else{
                if(element instanceof HTMLElement)
                {
                    element.classList.remove("visible");
                    element.classList.add("hidden");
                }
            }
        })

    }
    body.onscroll = () =>
    {
        print("Moving scroll")
        lookIfvisible(AllElements);
    }
    
    
    body.onload = () =>
    {
        lookIfvisible(AllElements);
    }
    

}
