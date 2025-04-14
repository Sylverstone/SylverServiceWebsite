import fs from 'fs';
import path from 'path';
import __dirname from '../../dirname.js';
//lit le fichier filePath
const loadTemplate = (filePath) => {
    return fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
};
const index = loadTemplate("index.html");
const Technique = loadTemplate(path.join("pages", "Techniques.html"));
const form = loadTemplate(path.join("pages", "form.html"));
const legalMention = loadTemplate(path.join("pages", "mentionLegal.html"));
export const PAGE_LINKS = [
    '/:lang',
    '/:lang/pages/form',
    '/:lang/pages/Techniques',
    '/:lang/pages/mentionLegal',
];
export const is_page_link_t = (key) => {
    //as readonly string[] transforme le tableau en simple tableau de string, et pas tableau de string précise
    return PAGE_LINKS.includes(key);
};
const originTemplatePage = {
    '/:lang': { "template": index, "isComplete": false, "lang": "fr" },
    '/:lang/pages/form': { "template": form, "isComplete": false, "lang": "fr" },
    '/:lang/pages/Techniques': { "template": Technique, "isComplete": false, "lang": "fr" },
    '/:lang/pages/mentionLegal': { "template": legalMention, "isComplete": false, "lang": "fr" }
};
let pages = {
    '/:lang': { "template": index, "isComplete": false, "lang": "fr", "originTemplate": index },
    '/:lang/pages/form': { "template": form, "isComplete": false, "lang": "fr", "originTemplate": form },
    '/:lang/pages/Techniques': { "template": Technique, "isComplete": false, "lang": "fr", "originTemplate": Technique },
    '/:lang/pages/mentionLegal': { "template": legalMention, "isComplete": false, "lang": "fr", "originTemplate": legalMention }
};
const pageToTextId = {
    "/:lang": { "nombreText": 3 },
    '/:lang/pages/form': undefined,
    "/:lang/pages/Techniques": { "nombreText": 1 },
    "/:lang/pages/mentionLegal": { "nombreText": 1 }
};
const header = loadTemplate(path.join("partial", "header.html"));
const footer = loadTemplate(path.join("partial", "footer.html"));
const changeLangue = loadTemplate(path.join("partial", "changeLangue.html"));
export { footer, header, pageToTextId, pages, index, __dirname, originTemplatePage, changeLangue };
