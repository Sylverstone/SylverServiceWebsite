import axios from "axios";
import fs from 'fs'
import __dirname from "../dist/dirname.js";
import path from "path";
import "dotenv/config"

const zoneRecherche = [__dirname,path.join(__dirname,"pages")]
const relatifZone = ["", "/pages/"]
const langs = ["fr", "en"]
const pageRestreinte = ["googleec111dafdd73fd90.html",]

function indexNow()
{
    let urlList = [];
    zoneRecherche.forEach((dir,i) => {
        let files = fs.readdirSync(dir);
        files = files.filter((file) => path.extname(file) == ".html" && !pageRestreinte.includes(file) ).map((file) => {
            if(file === "index.html")
                return "";
            return file.slice(0,-5);
        })
        
        let filteredFile = [];
        files.forEach((file,j) => {
            langs.forEach((lang) => {
                filteredFile.push(`https://sylverservice.up.railway.app/${lang}${relatifZone[i]}${file}`);
            })
        })            
        urlList.push(...filteredFile)
    })
    console.log(urlList);
    const data = {
        host: "sylverservice.up.railway.app",
        key: process.env.indexNowKey,
        keyLocation: `https://sylverservice.up.railway.app/${process.env.indexNowKey}.txt`,
        urlList: urlList
      };
    
    axios.post('https://api.indexnow.org/indexnow', data, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => console.log(response.status, response.statusText))
    .catch(error => console.log(error));
}

indexNow();