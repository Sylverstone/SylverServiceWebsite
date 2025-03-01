import fs from 'fs'; 
import path from 'path';
import { showTable,print } from '../../devFonction.js';
import __dirname  from "./../../../../dirname.js";
import { pathToFileURL } from 'url';
import express from 'express';

/**
 * 
 * @param {express.Express} app 
 * @param {string} comp
 */

const resolve_api = async(app,apiDirs,apiLoc = "api",comp = "") =>
{
    for(const dir of apiDirs)
    {
        if(fs.existsSync(path.join(__dirname,"public",apiLoc,dir,"api.js")))
        {
            let charged = "";
            const pathApi = path.join(__dirname,"public",apiLoc,dir,"api.js");
            console.log("chargement de l'api :",pathApi)
            const {get, post, head} = await import(pathToFileURL(pathApi));
            
            if(get) 
            {
                app.get(`/api/${dir}${comp}`, (req,res) => {
                    return get(req,res);
                });
                charged += "get ";
            }
            if(post)
            {
                app.post(`/api/${dir}${comp}`, (req,res) => post(req,res));
                charged += "post ";
            } 
            if(head)
            {
                app.head(`/api/${dir}${comp}`, (req,res) => head(req,res));
                charged += "head ";        
            }
            print("[LOG] l'api " + dir + " a été chargée. méthode chargée : " + charged);
            print("[CHEMIN] " + `/api/${dir}${comp}`)
        }   
        else
        {
            console.log("Aucun fichier api.js n'existe")
            continue;
        }
        
    }
}

/**
 * 
 * @param {express.Express} app 
 */
export default async function load_api(app)
{
    const apiDirs = fs.readdirSync(path.join(__dirname,"public","api")).filter(file => {
        const stat = fs.statSync(path.join(__dirname,"public","api",file));
        return stat.isDirectory() && file !== "lang_api";
    })
    
    const langApiDirs = fs.readdirSync(path.join(__dirname,"public","api","lang_api")).filter(file => {
        const stat = fs.statSync(path.join(__dirname,"public","api","lang_api",file));
        return stat.isDirectory()});
    app.get("/api/fs", (req,res) => {return res.status(200).json({message : "succed"})})

    showTable(apiDirs);
    
    try
    {
        await resolve_api(app,apiDirs);
        await resolve_api(app,langApiDirs,path.join("api","lang_api"), "/:lang");

    }
    catch(err)
    {
        console.error(err);
        process.exit(1);  // Exit with error code 1 to indicate failure.
    }
    
}

