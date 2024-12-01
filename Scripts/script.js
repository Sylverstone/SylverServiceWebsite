
const go_to = (Element) => {
    const element = document.getElementById(Element);
    element.scrollIntoView(
        { 
            behavior:'smooth',
            block:'start'
        }
    );
    
}

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
        console.log(li.className);
        li.onclick = () => go_to(li.className);
    })
}


