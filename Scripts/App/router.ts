import {footer, header, originTemplatePage, pageToTextId, pages,changeLangue} from './pagesHtml.js';
import express, {application, Application, Express, Request, Response} from 'express';
import fs from 'fs';
import __dirname from '../../dirname.js';
import path from 'path'
import { getTraduction } from './getText.js';
import { displayToStatic } from './displayToStatic.js';
import { print } from './devFonction.js';
import { lang_t } from './getText.js';

import dotenv from "dotenv"
import setup_accueil from './pages/index.html.js';
dotenv.config({path : "/.env"})

const element_commun = {
    "{{title}}" : "header_title",
    "{{page_title}}" : "page_title",
};

type key_of_element_commun = | "{{title}}" | "{{page_title}}"

export type pages_key_t = '/:lang' | '/:lang/pages/form.html' | '/:lang/pages/Techniques.html' 
    | "/:lang/pages/mentionLegal.html";

export type key_text_t_value_t = "header_title" | "page_title" 


const is_key_of_element_commun = (key : string) : key is key_of_element_commun =>
{
    return ["{{title}}", "{{page_title}}"].includes(key);
}

export const is_pages_key_t = (key : string) : key is pages_key_t => 
{
    return ["/:lang", "/:lang/pages/form.html", "/:lang/pages/Techniques.html", "/:lang/pages/mentionLegal.html"].includes(key);
}

export const is_text_t_value_t = (key : string) : key is key_text_t_value_t =>
{
    return ["header_title","page_title"].includes(key);
}

export const is_lang_t = (lang : string) : lang is lang_t => {
    return lang === "en" || lang === "fr";
}


const completePage = (app : Application,url : pages_key_t) =>
{
    if(!is_pages_key_t(url))return;
    app.get(url, async (req : Request,res : Response) : Promise<any> => {
        try{
            const lang = req.params.lang;
            print(lang);
            
            const dataPage = pages[url];
            let Origintemplate = dataPage["template"];
            let template : string;
            if(!is_lang_t(lang)) return;
            const text_traduit = await getTraduction(lang);
            if(dataPage["isComplete"] === false || dataPage["lang"] != lang)
            {
                //origin template est passé au template par défaut, celui-ci n'est jamais changé (il faut mettre en place ce système pour le cas d'un changement de langue)
                Origintemplate = originTemplatePage[url]["template"];
                template = Origintemplate.replace('{{header}}', header).replace('{{footer}}',footer).replace('{{langue}}',changeLangue)
                const data = pageToTextId[url];
                if(data && text_traduit[url]["texte_i"])
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
                    if(!is_key_of_element_commun(key)) return;
                    if(!is_text_t_value_t(element_commun[key])) return;
                    template = template.replace(key, text_traduit[url][element_commun[key]]);
                })
                if(url == "/:lang")
                {               
                    template = await setup_accueil(template,lang,pages);
                    if(template === "") throw new Error("Error in template");
                }            
                else
                {
                    pages[url]["template"] = template;
                    pages[url]["isComplete"] = true;
                    pages[url]["lang"] = lang;
                }            
            }
            else
            {
                print("already charged")
                template = Origintemplate;
            }
            return res.status(200).send(template);
        }
        catch(err)
        {
            console.error("Erreur lors de la chargement de la page : " + err);
            return res.status(500).json({error : "Erreur d'execution " + err})
        }
        

    });
}

export const setupAppUse = (app : Application) => 
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
    if(process.env.ENV === 'development')
    {
        app.use('/SCSS', express.static(path.join(__dirname, 'SCSS')));
    }
    app.use('/partial',express.static(path.join(__dirname, 'partial')));
    //app.use('/Images', express.static(path.join(__dirname, 'Images')));
    app.use('/Scripts/App', express.static(path.join(__dirname, 'Scripts','App')));
    app.use('/Scripts/Site', express.static(path.join(__dirname, 'Scripts','Site')));
    
    const icons = fs.readdirSync(path.join(__dirname,"favicon")).filter(icon => icon.startsWith('favicon'));
    displayToStatic(app,icons,"favicon");
    const publicFiles = fs.readdirSync(path.join(__dirname,'public'))
    displayToStatic(app,publicFiles,"public");

    
   
}
 
export const handle404 = (app : Application) => 
{
    app.use((req, res) => {
        console.log(`404: ${req.path}`);
        return res.status(404).sendFile(path.join(__dirname, '404','404.html'));
    })
}

export const setupSitePageAvailable = (app : Application) =>
{
    Object.keys(pages).forEach(url => {
        if(!is_pages_key_t(url)) return;
        completePage(app,url)
    }
        
    );
}