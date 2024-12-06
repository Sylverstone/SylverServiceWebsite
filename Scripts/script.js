

const go_to = (Element) => {
    const element = document.getElementById(Element);
    const rect = element.getBoundingClientRect();
    console.log(element.getClientRects(),screen.height)
   
    const asideFlottant = document.querySelector(`.fixe-asideFlottant`)
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

const cancel = (origineDisplay,canceller) =>
{
    console.log("in",origineDisplay)
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
            canceller.setAttribute("src","Images/oeil.png");

        }
        else 
        {
            enfantUL.forEach(li => li.style.display = `${origineDisplay}`);
            canceller.className = "cancel-aside";
            canceller.setAttribute("src","Images/croix.png");
            
        }
    }
    
}

const allCanceller = document.querySelectorAll("[class|='cancel']");
allCanceller.forEach(
    elt => elt.onclick = () => cancel(elt.getAttribute("valueDisplay"),elt)
);
const handleClickLi = (element) => {
    if(element instanceof HTMLElement)
    {
        const firstChild = element.firstChild;
        const href = firstChild.getAttribute('href');
        window.location.assign(href);
    }
    return "bug";
    
}

const NavUl = document.querySelector('.nav-ul');

if(NavUl)
{
    let allLi = NavUl.querySelectorAll('li');
    allLi.forEach(li => {
        li.onclick = () => handleClickLi(li);
    })

}

const mainUl = document.querySelector('.main-ul');

if(mainUl)
{
    let allLi2 = mainUl.querySelectorAll('li');

    allLi2.forEach(li => {
        li.onclick = () => go_to(li.className);
    })
}

