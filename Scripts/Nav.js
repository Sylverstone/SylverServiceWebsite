
let linkAddValue = ["","pages/","pages/"];
let headerValue = "";

const header = document.querySelector("header"); 
const script = document.currentScript;
const haveHeader = script.getAttribute('haveHeader');
const nameHeader = script.getAttribute('nameHeader');
const inPage = script.getAttribute('inPage');

if(haveHeader)
{
    headerValue = `<h1 class="title">${nameHeader}</h1>`;
}

if(inPage){
    linkAddValue = ["../","",""];
}

header.innerHTML = 
`
    <div class=".variables"></div>
    ${headerValue}
        <nav class="fixe-nav">
            <ul class="nav-ul">
                <li><a class="lien-nav" href="${linkAddValue[0]}index.html">Sylver Service</a></li>
                <li><a class="lien-nav" href="${linkAddValue[1]}Techniques.html">Techniques</a></li>
                <li><a class="lien-nav" href="${linkAddValue[2]}form.html">Formulaires</a></li>
            </ul>
        </nav>
`;