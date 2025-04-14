
import fs from 'fs';
import path from 'path';
import __dirname from '../../dirname.js';
import { lang_t } from './getText.js';


//lit le fichier filePath
const loadTemplate = (filePath : string) => { 
    return fs.readFileSync(path.join(__dirname,filePath), 'utf-8');
};

const index = loadTemplate("index.html");
const Technique = loadTemplate(path.join("pages","Techniques.html"));
const form = loadTemplate(path.join("pages","form.html"));
const legalMention = loadTemplate(path.join("pages","mentionLegal.html"));

export const PAGE_LINKS = 
[
    '/:lang',
    '/:lang/pages/form',
    '/:lang/pages/Techniques',
    '/:lang/pages/mentionLegal',

] as const;
// as const permet de transformer le type de string[] en "/:lang" | "/:lang/pages/form" ....

export type page_link_t = typeof PAGE_LINKS[number];

export const is_page_link_t = (key : string) : key is page_link_t => 
{
    //as readonly string[] transforme le tableau en simple tableau de string, et pas tableau de string précise
    return (PAGE_LINKS as readonly string[]).includes(key);
}

const originTemplatePage : Record<page_link_t,any> =  {

    '/:lang' : {"template" : index, "isComplete" : false,"lang" : "fr"},
    '/:lang/pages/form' : {"template" : form, "isComplete" : false,"lang" : "fr"},
    '/:lang/pages/Techniques' : {"template" : Technique, "isComplete" : false,"lang" : "fr"},
    '/:lang/pages/mentionLegal' : {"template" : legalMention, "isComplete" : false,"lang" : "fr"}
}

export interface data_page_t
{
    "template" : string,
    "isComplete" : boolean,
    "lang" : lang_t,
    "originTemplate" : string
}
export type page_t = Record<page_link_t,data_page_t>

let pages : page_t =
{
    '/:lang' : {"template" : index, "isComplete" : false,"lang" : "fr","originTemplate" : index},
    '/:lang/pages/form' : {"template" : form, "isComplete" : false,"lang" : "fr","originTemplate" : form},
    '/:lang/pages/Techniques' : {"template" : Technique, "isComplete" : false,"lang" : "fr","originTemplate" : Technique},
    '/:lang/pages/mentionLegal' : {"template" : legalMention, "isComplete" : false,"lang" : "fr","originTemplate" : legalMention}
}

const pageToTextId : Record<page_link_t, {"nombreText" : number} | undefined> = 
{
    "/:lang" : {"nombreText" : 3},
    '/:lang/pages/form' : undefined,
    "/:lang/pages/Techniques" : {"nombreText" : 1},
    "/:lang/pages/mentionLegal" : {"nombreText" : 1}
}

const header = loadTemplate(path.join("partial","header.html"));

const footer = loadTemplate(path.join("partial","footer.html"));

const changeLangue = loadTemplate(path.join("partial","changeLangue.html"));

export {footer, header, pageToTextId, pages, index,__dirname,originTemplatePage,changeLangue};