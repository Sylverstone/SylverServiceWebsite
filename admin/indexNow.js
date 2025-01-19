import axios from "axios";
import fs from 'fs'
import __dirname from "../dirname.js";
import path from "path";

const zoneRecherche = [__dirname,path.join(__dirname,"pages")]
const relatifZone = ["/", "/pages"]
const pageRestreinte = ["googleec111dafdd73fd90.html",]
function indexNow()
{
    let urlList = [];
    zoneRecherche.forEach((dir,i) => {
        let files = fs.readdirSync(dir);
        files = files.filter((file) => path.extname(file) == ".html" && !pageRestreinte.includes(file) )
        const filteredFile = files.map(value => new URL(path.join(relatifZone[i], value), "https://sylverservice.up.railway.app").toString())
        urlList.push(...filteredFile)
    })

    console.log(urlList);
    const data = {
        host: "sylverservice.up.railway.app",
        key: "7ce1b11f48bf459286f3d28f4bfc0099",
        keyLocation: "https://sylverservice.up.railway.app/7ce1b11f48bf459286f3d28f4bfc0099.txt",
        urlList: urlList
      };
    
    axios.post('https://api.indexnow.org/indexnow', data, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
   
}

indexNow();