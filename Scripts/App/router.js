import {footer, header, originTemplatePage, pageToTextId, pages} from './pagesHtml.js';
import express from 'express';
import fs from 'fs';
import __dirname from '../../dirname.js';
import path from 'path'
import sendmail from '../Site/sendMail.js';
import { getTraduction } from './getText.js';
import setup_accueil from "./pages/index.html.js"
import { displayToStatic } from './displayToStatic.js';

const element_commun = {
    "{{title}}" : "header_title",
    "{{page_title}}" : "page_title"
};
const completePage = (app,url) =>
{
    app.get(url, async (req, res) => {
        
        const lang = req.params.lang;
        console.log(lang);
        const dataPage = pages[url];
        let Origintemplate = dataPage["template"];
        let template;
        const text_traduit = await getTraduction(lang);

        if(dataPage["isComplete"] === false || dataPage["lang"] != lang)
        {
            //origin template est passé au template par défaut, celui-ci n'est jamais changé (il faut mettre en place ce système pour le cas d'un changement de langue)
            Origintemplate = originTemplatePage[url]["template"];
            template = Origintemplate.replace('{{header}}', header).replace('{{footer}}',footer);
            const data = pageToTextId[url];
            if(data !== undefined)
            {
                const nbText = data["nombreText"];
                //const idText = data["idText"];
                for(let i = 1; i < nbText + 1; i++)
                {
                    template = template.replace('{{texte'+i+'}}', text_traduit[url]["texte_i"][i-1]);
                }
            }       
            //set les elements commun des pages (titre d'onglet, h1 de pages,...)
            Object.keys(element_commun).forEach(key => {
                template = template.replace(key, text_traduit[url][element_commun[key]]);
            })

            if(url == "/:lang")
            {
               
                template = await setup_accueil(template,lang,pages);
            }
            
            else
            {
                pages[url] = {"template" : template, "isComplete" : true,"lang" : lang};
            }
            
        }
        else
        {
            template = Origintemplate;
        }
        return res.send(template);

    });
}

export const setupAppUse = (app) => 
{
    //app.use('/Css', express.static(path.join(__dirname, 'Css')));
    const cssFile = fs.readdirSync(path.join(__dirname,"Css"));
    cssFile.forEach(file => {
        if(process.env.ENV === 'development')
        {
            app.get(`/Css/${file}`,(req,res) => res.sendFile(path.join(__dirname,"Css",`${file}`)));
        }
        else
        {
            //ne pas rendre les .map en prod
            if(file.endsWith(".css"))
            {
                app.get(`/Css/${file}`,(req,res) => res.sendFile(path.join(__dirname,"Css",`${file}`)));
            }
        }
       
    })
    //ne pas rendre les .scss en prod
    if(process.env.ENV === 'development')
    {
        app.use('/SCSS', express.static(path.join(__dirname, 'SCSS')));
    }
    app.use('/partial',express.static(path.join(__dirname, 'partial')));
    //const partials = fs.readdirSync(path.join(__dirname,"partial"));
    //console.table(partials);
    //displayToStatic(app,partials,"partial");
    app.use('/Images', express.static(path.join(__dirname, 'Images')));
    app.use('/Scripts/App', express.static(path.join(__dirname, 'Scripts','App')));
    app.use('/Scripts/Site', express.static(path.join(__dirname, 'Scripts','Site')));
    
    const icons = fs.readdirSync(path.join(__dirname,"favicon")).filter(icon => icon.startsWith('favicon'));
    displayToStatic(app,icons,"favicon");
    const publicFiles = fs.readdirSync(path.join(__dirname,'public'));
    displayToStatic(app,publicFiles,"public");
   
}

export const getImageRoute = (app) =>
{
    app.get('/api/getImage', (req, res) => {

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
    app.get('/api/form', (req, res) => {
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

export const redirectPage = app =>
{

}
export const setupSitePageAvailable = app =>
{
    Object.keys(pages).forEach(url => 
        completePage(app,url)
    );
}