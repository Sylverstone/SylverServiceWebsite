import { texts } from '../Site/text.js';
import {footer, header, pageToTextId, pages} from './pagesHtml.js';
import fetch from 'node-fetch';
import express from 'express';
import fs from 'fs';
import __dirname from '../../dirname.js';
import path from 'path'

const completePage = (app,url) =>
{
    
    app.get(url, async (req, res) => {
        const dataPage = pages[url]
        const Origintemplate = dataPage["template"];
        let template;
        if(dataPage["isComplete"] === false)
        {
            console.log("charging")
            template = Origintemplate.replace('{{header}}', header).replace('{{footer}}',footer);
            const data = pageToTextId[url];
            if(data !== undefined)
            {
                const nbText = data["nombreText"];
                const idText = data["idText"];
                for(let i = 1; i < nbText + 1; i++)
                {
                    template = template.replace('{{texte'+i+'}}', texts[idText][i-1]);
                }
            }       
            if(url == "/" || url == "/index.html")
            {
                const response = await fetch("https://sylverservice.up.railway.app/getImage");
                const images = await response.json();
                let Imageshtml = "";
                Imageshtml += "<aside id=\"ImagesSylverservice\">";
                const BaseElementImage = "<img src=\"{{src}}\" alt=\"Images de l'application\">";
                let elementImage;
                images.forEach(image => {
                    elementImage = BaseElementImage.replace("{{src}}",image);
                    Imageshtml += "\n" + elementImage;
                })
                Imageshtml += "\n</aside>"
                template = template.replace("{{images}}", Imageshtml)
                pages['/'] = {"template" : template, "isComplete" : true}
                pages['/index.html'] = {"template" : template, "isComplete" : true};
               
            }
            else
            {
                pages[url] = {"template" : template, "isComplete" : true};
            }
            
        }

        else
        {
            template = Origintemplate;
            console.log("Already charged")
        }
        return res.send(template);

    });
}
export const setupAppUse = (app) => 
{
    app.use('/Css', express.static(path.join(__dirname, 'Css')));
    app.use('/Images', express.static(path.join(__dirname, 'Images')));
    app.use('/Scripts/App', express.static(path.join(__dirname, 'Scripts','App')));
    app.use('/Scripts/Site', express.static(path.join(__dirname, 'Scripts','Site')));
    app.get('/robots.txt', (req, res) => res.sendFile(path.join(__dirname, 'robots.txt')));
    app.get('/sitemap.xml', (req, res) => res.sendFile(path.join(__dirname, 'sitemap.xml')));
    app.get('7ce1b11f48bf459286f3d28f4bfc0099.txt', (req,res) => res.sendFile(path.join(__dirname,'7ce1b11f48bf459286f3d28f4bfc0099.txt')))
    console.log(path.join(__dirname,'Scripts'))
}

export const getImageRoute = (app) =>
{
    app.get('/getImage', (req, res) => {

        console.log("in there")
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
}
    
export const formRoute = (app) =>
{
    app.get('/form', (req, res) => {
        console.log(req.query);
        if(sendmail(req.query))
        {
            return res.send('<script>alert("Votre formulaires a été envoyé"); window.location.assign("index.html")</script>');
        }
        return res.send('<script>alert("Une erreur a eu lieu :( ); window.location.assign("index.html")</script>')
    });
}

export const handle404 = app => 
{
    app.use((req, res) => {
        return res.status(404).sendFile(path.join(__dirname, '404','404.html'));
    })
}

export const setupSitePageAvailable = app =>
{
    Object.keys(pages).forEach(url => 
        completePage(app,url)
    );
}