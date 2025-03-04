import fs from 'fs';
import path from 'path';
import { print } from '../../../Scripts/App/devFonction.js';
import __dirname from '../../../dirname.js';
import  {Request, Response} from 'express';
export const get = (req :Request ,res : Response) => 
{
    print("in api")
    //path dans fs.readdir n'est pas une requete express, alors il faut mettre le VRAI chemin
    fs.readdir(path.join("public","Images","Sylverservice"), (err,files)=>
    {
        if(err)
        {
            console.error('Erreur lors de la lecture des images',err);
            return res.status(505).json({error : "Api error"});
        }
        const filesPath = files.map(file => path.join("Images","Sylverservice",file));       
        return res.json(filesPath);
    });
}

