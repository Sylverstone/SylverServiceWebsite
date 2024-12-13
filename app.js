import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sendmail from './Scripts/sendMail.js';
import fs from 'fs';



const app = express();
const __filename = fileURLToPath(import.meta.url);
export const  __dirname = path.dirname(__filename);

const loadTemplate = (filePath) => {
    return fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
};

console.log(__dirname);
app.use('/Css', express.static(path.join(__dirname, '/Css')));
app.use('/Scripts', express.static(path.join(__dirname, '/Scripts')));
app.use('/Images', express.static(path.join(__dirname, '/Images')));


const index = loadTemplate("index.html");
const Technique = loadTemplate(path.join("pages","Techniques.html"));
const form = loadTemplate(path.join("pages","form.html"));

//pages

const pages =
{
    '/index.html' : index,
    '/pages/form.html' : form,
    '/pages/Techniques.html' : Technique
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

app.get('/', (req, res) => {
    console.log("have request");
    let fullPage;
    fullPage = index.replace('{{header}}', header).replace('{{footer}}', footer);
    return res.send(fullPage);
})

Object.keys(pages).forEach(url => {
    const template = pages[url];
    console.log("url : ", url);
    app.get(url,(req, res) => {
        console.log("user is requesting",url);
        return res.send(template.replace('{{header}}', header).replace('{{footer}}',footer));
    });
    
})

app.use('/pages', express.static(path.join(__dirname, '/pages')));

app.get('/getImage', (req, res) => {

    fs.readdir(path.join("Images","Sylverservice"), (err,files) =>
    {
        if(err)
        {
            console.error('Erreur lors de la lecture des images',err);
            return;
        }

        files.forEach( (file,i) => {
            files[i] = path.join("Images","Sylverservice",file);
        })
        res.json(files);
    });

});

/*app.get('/index.html', (req, res) => {
    console.log("have request");
    let fullPage;
    fullPage = index.replace('{{header}}', header).replace('{{footer}}', footer);
    return res.send(fullPage);
})



app.get('/pages/Techniques.html', (req, res) => {
    console.log("request page techniques");
    let fullPage;
    fullPage = Technique.replace('{{header}}', header).replace('{{footer}}', footer);
    return res.send(fullPage);
})

app.get('/pages/form.html', (req, res) => {
    console.log("request page form");
    let fullPage;
    fullPage = form.replace('{{header}}', header).replace('{{footer}}', footer);
    return res.send(fullPage);
})
//
*/

app.get('/form', (req, res) => {
    console.log(req.query);
    if(sendmail(req.query))
    {
        return res.send('<script>alert("Votre formulaires a été envoyé"); window.location.assign("index.html")</script>');
    }
    return res.send('<script>alert("Une erreur a eu lieu :( ); window.location.assign("index.html")</script>')
});

app.use((req, res) => {
    return res.status(404).sendFile(path.join(__dirname, '404','404.html'));
})

app.listen(80, () => {
    console.log('Server running on port 80');
})