import path from "path";
import __dirname from "../../dirname.js";
import fs from "fs"

export const displayToStatic = (app,list,folderName,comp = "") => 
{
    list.forEach(elt => {
        const statFile = fs.statSync(path.join(__dirname,folderName,elt));
        if(statFile.isDirectory())
        {
            const tempFile = fs.readdirSync(path.join(__dirname,folderName,elt));
            displayToStatic(app,tempFile,path.join(folderName,elt),`${comp}${elt}/`);
        }
        else
        {
            console.log(`/${comp}${elt} -> ${path.join(__dirname,folderName,elt)}`);
            app.get(`/${comp}${elt}`,(req,res) => res.sendFile(path.join(__dirname,folderName,elt)));
        }
    })
}