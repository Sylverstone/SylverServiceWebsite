
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const  __dirname = path.join(path.dirname(__filename),"..");
const loadTemplate = (filePath) => {
    return fs.readFileSync(path.join(__dirname,filePath), 'utf-8');
};

const index = loadTemplate("index.html");
const Technique = loadTemplate(path.join("pages","Techniques.html"));
const form = loadTemplate(path.join("pages","form.html"));
const legalMention = loadTemplate(path.join("pages","mentionLegal.html"));

const pages =
{
    '/' : index,
    '/index.html' : index,
    '/pages/form.html' : form,
    '/pages/Techniques.html' : Technique,
    '/pages/mentionLegal.html' : legalMention
}

const pageToTextId = 
{
    "/index.html" : [0,3],
    "/pages/Techniques.html" : [1,1],
    "/pages/mentionLegal.html" : [2,1]
    
}

const header = 
`
<nav class="fixe-nav">
    <ul class="nav-ul">
        <li><a class="lien-nav" href="/index.html">Sylver Service</a></li>
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