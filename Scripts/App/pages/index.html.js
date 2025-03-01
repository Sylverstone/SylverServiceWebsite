import fetch from "node-fetch";

async function setup_accueil(template,lang,pages){

    const urlBase = process.env.URL;
    console.log(`${urlBase}api/getImage`)
    const response = await fetch(`${urlBase}api/getImage`);
    const images_path = await response.json();
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
    pages['/:lang'] = {"template" : template, "isComplete" : true, "lang" : lang}

    return template

}

export default setup_accueil;