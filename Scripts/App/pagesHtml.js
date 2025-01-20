
import fs from 'fs';
import path from 'path';
import __dirname from '../../dirname.js';

const loadTemplate = (filePath) => {
    return fs.readFileSync(path.join(__dirname,filePath), 'utf-8');
};

const index = loadTemplate("index.html");
const Technique = loadTemplate(path.join("pages","Techniques.html"));
const form = loadTemplate(path.join("pages","form.html"));
const legalMention = loadTemplate(path.join("pages","mentionLegal.html"));


let pages =
{
    '/' : {"template" : index, "isComplete" : false},
    '/index.html' : {"template" : index, "isComplete" : false}, //a retirer mais on sait jamais
    '/pages/form.html' : {"template" : form, "isComplete" : false},
    '/pages/Techniques.html' : {"template" : Technique, "isComplete" : false},
    '/pages/mentionLegal.html' : {"template" : legalMention, "isComplete" : false}
}

const pageToTextId = 
{
    "/" : {"idText" : 0, "nombreText" : 3},
    "/index.html" : {"idText" : 0, "nombreText" : 3}, //a retirer mais on sait jamais
    "/pages/Techniques.html" : {"idText" : 1, "nombreText" : 1},
    "/pages/mentionLegal.html" : {"idText" : 2, "nombreText" : 1}
    
}

const header = 
`
<nav class="fixe-nav">
    <ul class="nav-ul">
        <li><a class="lien-nav" href="/">Sylver Service</a></li>
        <li><a class="lien-nav" href="/pages/Techniques.html">Techniques</a></li>
        <li><a class="lien-nav" href="/pages/form.html">Formulaires</a></li>
    </ul>
</nav>
`;

const footer = 
`
<footer>
    <div>
        <a href="/pages/mentionLegal.html" target="_blank">Mention légales</a>
        <img src="/Images/justice.png" alt="mention légales" class="footerIMG" clickEvent="false">
    </div>
    <div>
        <a href="https://github.com/Sylverstone/" target="_blank">Mon Github</a>
        <img src="/Images/github.svg" alt="mention légales" class="footerIMG" clickEvent="false">
    </div>
    <div>
        <a href="https://www.linkedin.com/in/sylviopelagemaxime/" target="_blank">Mon LinkedIn</a>
        <img src="/Images/Icon_linkedin.png" alt="mention légales" class="footerIMG" clickEvent="false">
    </div>  
    <div>
        <a href="mailto:SylverService@outlook.fr">Me contacter</a>
        <img src="/Images/icon_email.png" alt="mention légales" class="footerIMG" clickEvent="false">
    </div>
</footer>
`;

export {footer, header, pageToTextId, pages, index,__dirname};