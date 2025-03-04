import { print,showTable } from "./devFonction.js";
import express, {Application,Request,NextFunction,Response} from "express";
const langue_dispos = ["fr", "en"];
const extension_interdit = ["png", "jpg", "jpeg", "svg", "ico", "txt", "xml", "js", "css", "map"];
const back : string[] = []

const handleReqWithNoRedirect = (url : string) => {
    if (!(typeof url === "string")) return false;
    return !(
        langue_dispos.some((langue_dispo) => url.startsWith(`/${langue_dispo}/`) || url.startsWith(`${langue_dispo}/`) || url === `${langue_dispo}`) ||
        extension_interdit.some((ext) => url.endsWith(ext))
        || url.startsWith("/api/")
    );
};

export const middleware = async(req : Request, res : Response, next : NextFunction) => {
    // Si aucun cookie de langue n'est défini, on l'initialise
    if(!(extension_interdit.some((ext) => req.url.endsWith(ext))) || req.url.endsWith("txt"))
    {
        //print(`request : ${req.url}`)
    }

    const defaultValue = "fr";
    if (!req.cookies.lang && req.url.split("/")[1] !== "api") {
        //print("no req.lang, setting req.lang");

        // Définir la langue par défaut selon les préférences du navigateur ou 'fr' par défaut
        const temp_lang = req.acceptsLanguages(langue_dispos) || defaultValue;
        res.cookie("lang", temp_lang, {
            httpOnly: true, // Cookie uniquement accessible par le serveur
            secure: process.env.ENV === 'production', // HTTPS en production
            maxAge: 3600 * 24 * 60 * 1000, // Expire après 60 jours
            sameSite: 'lax',
            path : "/" // Cookie envoyé pour les requêtes du même site
        });
    }

    let lang = req.cookies.lang;
    if (lang === undefined)
    {
        lang = req.acceptsLanguages(langue_dispos) || defaultValue;
    }
    if (!handleReqWithNoRedirect(req.url)) {
        if (langue_dispos.some((langue_dispo) => req.url.split('/')[1] === langue_dispo)) {
            const langInUrl = req.url.split("/")[1];
            back.push(langInUrl);
            /*
            showTable(back);
            print("lang : " + langInUrl)
            */
            res.cookie("lang", langInUrl, {
                httpOnly: true, // Cookie uniquement accessible par le serveur
                secure: process.env.ENV === 'production', // HTTPS en production
                maxAge: 3600 * 24 * 60 * 1000, // Expire après 60 jours
                sameSite: 'lax',
                path : "/" // Cookie envoyé pour les requêtes du même site
            });
            
            
        }
        return next(); // Continue l'exécution sans redirection
    } else {
        if(lang === undefined)
        {
            lang = req.acceptsLanguages(langue_dispos) || defaultValue;
        }
        let newReq = `/${lang}${req.url}`;
        /*
        print(newReq);
        print(`base url : ${req.url}`);
        print(`new request : ${newReq}`);
        */
        if (newReq.endsWith("/") && newReq !== `/${lang}/`) {
            newReq = newReq.slice(0, -1);
        }

        return res.redirect(301, newReq); 
    }
};
