
const langue_dispos = ["fr", "en"];
const extension_interdit = ["png", "jpg", "jpeg", "svg", "ico", "txt", "xml", "js", "css", "map"];

const handleReqWithNoRedirect = (url) => {
    if (!(typeof url === "string")) return false;
    return !(
        langue_dispos.some((langue_dispo) => url.startsWith(`/${langue_dispo}/`) || url.startsWith(`${langue_dispo}/`) || url === `${langue_dispo}`) ||
        extension_interdit.some((ext) => url.endsWith(ext))
    );
};

export const middleware = async(req, res, next) => {
    // Si aucun cookie de langue n'est défini, on l'initialise

    const defaultValue = "fr";
    if (!req.cookies.lang) {
        console.log("no req.lang, setting req.lang");

        // Définir la langue par défaut selon les préférences du navigateur ou 'fr' par défaut
        const temp_lang = req.acceptsLanguages(langue_dispos) || defaultValue;
        res.cookie("lang", temp_lang, {
            httpOnly: true, // Cookie uniquement accessible par le serveur
            secure: process.env.ENV === 'production', // HTTPS en production
            maxAge: 3600 * 24 * 60 * 1000, // Expire après 60 jours
            sameSite: 'lax' // Cookie envoyé pour les requêtes du même site
        });
    }

    let lang = req.cookies.lang || defaultValue;

    if (!handleReqWithNoRedirect(req.url)) {
        if (langue_dispos.some((langue_dispo) => req.url.startsWith(`/${langue_dispo}/`) || req.url.startsWith(`${langue_dispo}/` || req.url === `/${langue_dispo}/`))) {
            if(req.url.slice(1,3) !== lang)
            {
                res.cookie("lang", req.url.slice(1,3), {
                    httpOnly: true, // Cookie uniquement accessible par le serveur
                    secure: process.env.ENV === 'production', // HTTPS en production
                    maxAge: 3600 * 24 * 60 * 1000, // Expire après 60 jours
                    sameSite: 'lax' // Cookie envoyé pour les requêtes du même site
                });
                lang = req.url.slice(1,3);
            }
            
        }
        return next(); // Continue l'exécution sans redirection
    } else {

        let newReq = `/${lang}${req.url}`;
        console.log(newReq);
        console.log("base url:", req.url);
        console.log("new request:", newReq);

        if (newReq.endsWith("/") && newReq !== `/${lang}/`) {
            newReq = newReq.slice(0, -1);
        }

        return res.redirect(301, newReq); 
    }
};
