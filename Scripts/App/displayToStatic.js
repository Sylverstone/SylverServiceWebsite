import path from "path";
import __dirname from "../../dirname.js";

export const displayToStatic = (app,list,folderName) => 
{
    list.forEach(elt => {
        app.get(`/${elt}`,(req,res) => res.sendFile(path.join(__dirname,folderName,elt)));
    })
}