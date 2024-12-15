
let allImage = [];

async function loadImage()
{
    console.log("Loading image...");
    try
    {
        const response = await fetch("../getImage");
        const images = await response.json(); //liste des images
        const containerImage = document.querySelector("#ImagesSylverservice");
        if(containerImage instanceof HTMLElement)
        {
            images.forEach(image =>
            {
                const img = document.createElement("img");
                img.src = image;
                img.alt = image;
                containerImage.appendChild(img);
            });
        }

        return document.querySelectorAll('img:not([clickEvent="false"])');
    }
    catch(e)
    {
        alert("Erreur lors du chargement des images");
        return undefined;
    }
    
}

const transformImage = (result) =>
{

    const images = result;
    images.forEach((img) => {
        if(img instanceof HTMLElement) 
        {
            console.log(img)
            img.onclick = () => window.open(img.getAttribute("src"),'_blank');
        }
    })
}

allImage = loadImage();
//renvoie une promise car loadImage est une fonctione asynchrone
if(allImage != undefined)
{
    allImage.then((result) => {
        transformImage(result)
    }).catch((err) => {
        alert("Erreur lors du chargement des images\nErreur : " + err);
    });
    
}

export {transformImage};
