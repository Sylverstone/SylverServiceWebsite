

const transformImage = (result) =>
{
    
    const images = result;
    images.forEach((img) => {
        if(img instanceof HTMLElement) 
        {
            img.onclick = () => window.open(img.getAttribute("src"),'_blank');
        }
    })
}

const allImage = document.querySelectorAll('img:not([clickEvent="false"])');
transformImage(allImage);


const go_to = (Element) => {
    const element = document.getElementById(Element);
    const rect = element.getBoundingClientRect();
   
    const asideFlottant = document.querySelector(`.fixe-asideFlottant`)
    //900 est la taille des tel mobiles utilsé en css
    let offset = screen.width <= 900 ? asideFlottant.getBoundingClientRect().height : 50
    if(asideFlottant instanceof HTMLElement) {
        
        console.log(element.getBoundingClientRect().top)
        window.scrollTo(
            {
                behavior: "smooth",
                top: rect.y + window.scrollY - offset - 30
            });
    }
}

const mainUl = document.querySelector('.main-ul');

if(mainUl)
{
    let allLi2 = mainUl.querySelectorAll('li');

    allLi2.forEach(li => {
        li.onclick = () => go_to(li.className);
    })
}

const cancel = (origineDisplay,canceller) =>
{    
    const ListeDisplay = ["flex","block","grid","inline-flex","inline-block"];
    const asideFlottant = document.querySelector(`.fixe-asideFlottant`);
    const ul = asideFlottant.querySelector("ul");
    const enfantUL = ul.querySelectorAll("*");
    if(asideFlottant instanceof HTMLElement && canceller instanceof HTMLElement)
    {
        const valueDisplay = window.getComputedStyle(enfantUL[0]).display;
        if(ListeDisplay.includes(valueDisplay))
        {
            enfantUL.forEach(li => li.style.display = "none");
            canceller.className = "canceller-active";
            canceller.setAttribute("src","/Images/oeil.png");
        }
        else 
        {
            enfantUL.forEach(li => li.style.display = `${origineDisplay}`);
            canceller.className = "cancel-aside";
            canceller.setAttribute("src","/Images/croix.png");
            
        }
    }
}

const allCanceller = document.querySelectorAll("[class|='cancel']");
allCanceller.forEach(
    elt => elt.onclick = () => cancel(elt.getAttribute("valueDisplay"),elt)
);





