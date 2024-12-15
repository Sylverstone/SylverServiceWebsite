import express from 'express';
import path from 'path';
import sendmail from './Scripts/sendMail.js';
import fs from 'fs';
import { texts } from './Scripts/text.js';
import {footer, header, pageToTextId, pages, __dirname} from './Scripts/variables.js';

const app = express();


app.use('/Css', express.static(path.join(__dirname, '/Css')));
app.use('/Scripts', express.static(path.join(__dirname, '/Scripts')));
app.use('/Images', express.static(path.join(__dirname, '/Images')));

const completePage = (url) =>
{
    const template = pages[url];
    let renderedTemplate = template;
    app.get(url,(req, res) => {
        renderedTemplate = renderedTemplate.replace('{{header}}', header).replace('{{footer}}',footer);
        const data = pageToTextId[url];
        if(data !== undefined)
        {
            const nbText = data[1];
            const idText = data[0];
            for(let i = 1; i < nbText + 1; i++)
            {
                renderedTemplate = renderedTemplate.replace('{{texte'+i+'}}', texts[idText][i-1]);
            }
        }     
        return res.send(renderedTemplate);
    });

}

Object.keys(pages).forEach(url => 
    completePage(url)
);

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

app.get('/robots.txt', (req, res) => res.sendFile(path.join(__dirname, 'robots.txt')));
app.get('/sitemap.xml', (req, res) => res.sendFile(path.join(__dirname, 'sitemap.xml')));
app.get('/form', (req, res) => {
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