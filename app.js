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
    let template = pages[url];
    app.get(url,(req, res) => {
        console.log("user is requesting",url);
        template = template.replace('{{header}}', header).replace('{{footer}}',footer);
        const data = pageToTextId[url];
        console.log(data);
        if(data !== undefined)
        {
            const nbText = data[1];
            const idText = data[0];
            for(let i = 1; i < nbText + 1; i++)
            {
                console.log('{{texte'+i+'}}');
                template = template.replace('{{texte'+i+'}}', texts[idText][i-1]);
            }
        }       
        return res.send(template);
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