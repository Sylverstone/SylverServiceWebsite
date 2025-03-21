
import fs from 'fs';
import path from 'path';
import __dirname from '../../dirname.js';
import { lang_t } from './getText.js';

const loadTemplate = (filePath : string) => {
    return fs.readFileSync(path.join(__dirname,filePath), 'utf-8');
};

const index = loadTemplate("index.html");
const Technique = loadTemplate(path.join("pages","Techniques.html"));
const form = loadTemplate(path.join("pages","form.html"));
const legalMention = loadTemplate(path.join("pages","mentionLegal.html"));

const originTemplatePage =  {

    '/:lang' : {"template" : index, "isComplete" : false,"lang" : "fr"},
    '/:lang/pages/form.html' : {"template" : form, "isComplete" : false,"lang" : "fr"},
    '/:lang/pages/Techniques.html' : {"template" : Technique, "isComplete" : false,"lang" : "fr"},
    '/:lang/pages/mentionLegal.html' : {"template" : legalMention, "isComplete" : false,"lang" : "fr"}
}

export interface data_page_t
{
    "template" : string,
    "isComplete" : boolean,
    "lang" : lang_t,
    "originTemplate" : string
}
export interface page_t 
{
    '/:lang' : data_page_t;
    '/:lang/pages/form.html' : data_page_t;
    "/:lang/pages/Techniques.html" : data_page_t;
    "/:lang/pages/mentionLegal.html" : data_page_t;
}

let pages : page_t =
{
    '/:lang' : {"template" : index, "isComplete" : false,"lang" : "fr","originTemplate" : index},
    '/:lang/pages/form.html' : {"template" : form, "isComplete" : false,"lang" : "fr","originTemplate" : form},
    '/:lang/pages/Techniques.html' : {"template" : Technique, "isComplete" : false,"lang" : "fr","originTemplate" : Technique},
    '/:lang/pages/mentionLegal.html' : {"template" : legalMention, "isComplete" : false,"lang" : "fr","originTemplate" : legalMention}
}

const pageToTextId = 
{
    "/:lang" : {"nombreText" : 3},
    '/:lang/pages/form.html' : undefined,
    "/:lang/pages/Techniques.html" : {"nombreText" : 1},
    "/:lang/pages/mentionLegal.html" : {"nombreText" : 1}
}

const header = loadTemplate(path.join("partial","header.html"));

const footer = loadTemplate(path.join("partial","footer.html"));

const changeLangue = loadTemplate(path.join("partial","changeLangue.html"));

export {footer, header, pageToTextId, pages, index,__dirname,originTemplatePage,changeLangue};