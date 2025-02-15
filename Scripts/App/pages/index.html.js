async function setup_accueil(template,lang,pages){

    const response = await fetch("https://sylverservice.up.railway.app/getImage");
    const images_path = await response.json();
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