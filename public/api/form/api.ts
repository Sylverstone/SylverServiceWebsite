import sendmail from "./sendMail.js";
import { Request, Response } from "express";

export type data_t = 
{
    Nom : string, 
    Prenom : string,
    TypeEntreprise : string,
    email : string,
    textZone : string,
    EmailRetour : boolean
}
export const get = (req : Request<{},{},{},data_t>,res : Response) => 
{
    if(sendmail(req.query))
    {
        return res.send('<script>alert("Votre formulaires a été envoyé"); window.location.assign("index.html")</script>');
    }
    return res.send('<script>alert("Une erreur a eu lieu :( ); window.location.assign("index.html")</script>')
}