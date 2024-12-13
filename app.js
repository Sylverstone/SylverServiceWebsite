import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sendmail from './Scripts/sendMail.js';
import fs from 'fs';

const loadTemplate = (filePath) => {
    return fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
};

const app = express();
const __filename = fileURLToPath(import.meta.url);
export const  __dirname = path.dirname(__filename);

console.log(__dirname);
app.use('/Css', express.static(path.join(__dirname, '/Css')));
app.use('/Scripts', express.static(path.join(__dirname, '/Scripts')));
app.use('/pages', express.static(path.join(__dirname, '/pages')));
app.use('/Images', express.static(path.join(__dirname, '/Images')));

const index = loadTemplate("index.html");

app.get('/', (req, res) => {
    console.log(req.query);
    let fullPage;
    const nav = 
    `
    <h1 class='title'>"Sylver Service : Vos élèves n'auront jamais été aussi soudés"</h1>
        <nav class="fixe-nav">
            <ul class="nav-ul">
                <li><a class="lien-nav" href="index.html">Sylver Service</a></li>
                <li><a class="lien-nav" href="pages/Techniques.html">Techniques</a></li>
                <li><a class="lien-nav" href="pages/form.html">Formulaires</a></li>
            </ul>
        </nav>

    `
    fullPage = index.replace('{{header}}', nav);
    return res.send(fullPage);
})

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

        console.log(files);
        res.json(files);
    });

});

app.use(express.static(path.join(__dirname)));

app.get('/form', (req, res) => {
    console.log(req.query);
    if(sendmail(req.query))
    {
        return res.send('<script>alert("Votre formulaires a été envoyé"); window.location.assign("index.html")</script>');
    }
    return res.send('<script>alert("Une erreur a eu lieu :( ); window.location.assign("index.html")</script>')
});

app.use((req, res) => {
    return res.status(404).sendFile(path.join(__dirname, 'pages','404.html'));
})

app.listen(80, () => {
    console.log('Server running on port 80');
})