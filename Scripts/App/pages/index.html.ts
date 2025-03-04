import fetch from "node-fetch";
import { lang_t } from "../getText.js";
import { page_t } from "../pagesHtml.js";
import { setPageData } from "../setPageData.js";

export const is_string_array = (value : unknown) : value is string[] =>
{
    return Array.isArray(value) && value.every(v => typeof v === "string")
}
async function setup_accueil(template : string,lang : lang_t,pages : page_t){

    const urlBase = process.env.URL;
    console.log(`${urlBase}api/getImage`)
    const response = await fetch(`${urlBase}api/getImage`);
    const images_path = await response.json();
    if(!is_string_array(images_path)) return "";
    console.log(images_path)
    let Imageshtml = "";
    Imageshtml += "<aside id=\"ImagesSylverservice\">";
    const BaseElementImage = "<img src=\"/{{src}}\" alt=\"Images de l'application\">";
    let elementImage;
    images_path.forEach(path => {
        elementImage = BaseElementImage.replace("{{src}}",path);
        Imageshtml += "\n" + elementImage;
    })
    Imageshtml += "\n</aside>"
    template = template.replace("{{images}}", Imageshtml)
    setPageData(pages,"/:lang",template,lang);
    return template

}

export default setup_accueil;