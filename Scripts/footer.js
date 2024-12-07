const footer = document.querySelector('footer');
let linkAddValueFooter = ["pages/","","","",""]
const scriptFooter = document.currentScript;
const inPageFooter = scriptFooter.getAttribute('inPage');
if(inPageFooter)
{
    linkAddValueFooter = ["","../","../","../","../"]
}
footer.innerHTML = 
`
<div>
    <a href="${linkAddValueFooter[0]}mentionLegal.html" target="_blank">Mention légales</a>
    <img src="${linkAddValueFooter[1]}Images/justice.png" alt="mention légales" class="footerIMG" clickEvent="false">
</div>
<div>
    <a href="https://github.com/Sylverstone/" target="_blank">Mon Github</a>
    <img src="${linkAddValueFooter[2]}Images/github.svg" alt="mention légales" class="footerIMG" clickEvent="false">
</div>
<div>
    <a href="https://www.linkedin.com/in/sylviopelagemaxime/" target="_blank">Mon LinkedIn</a>
    <img src="${linkAddValueFooter[3]}Images/Icon_linkedin.png" alt="mention légales" class="footerIMG" clickEvent="false">
</div>  
<div>
    <a href="mailto:SylverService@outlook.fr">Me contacter</a>
    <img src="${linkAddValueFooter[4]}Images/icon_email.png" alt="mention légales" class="footerIMG" clickEvent="false">
</div>
`