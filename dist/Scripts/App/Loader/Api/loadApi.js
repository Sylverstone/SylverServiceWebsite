var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import path from 'path';
import { showTable, print } from '../../devFonction.js';
import __dirname from "../../../../dirname.js";
import { pathToFileURL } from 'url';
const resolve_api = (app_1, apiDirs_1, ...args_1) => __awaiter(void 0, [app_1, apiDirs_1, ...args_1], void 0, function* (app, apiDirs, apiLoc = "api", comp = "") {
    for (const dir of apiDirs) {
        if (fs.existsSync(path.join(__dirname, "public", apiLoc, dir, "api.js"))) {
            let charged = "";
            const pathApi = path.join(__dirname, "public", apiLoc, dir, "api.js");
            console.log("chargement de l'api :", pathApi);
            const { get, post, head } = yield import(pathToFileURL(pathApi).href);
            if (get) {
                app.get(`/api/${dir}${comp}`, (req, res) => {
                    return get(req, res);
                });
                charged += "get ";
            }
            if (post) {
                app.post(`/api/${dir}${comp}`, (req, res) => post(req, res));
                charged += "post ";
            }
            if (head) {
                app.head(`/api/${dir}${comp}`, (req, res) => head(req, res));
                charged += "head ";
            }
            print("[LOG] l'api " + dir + " a été chargée. méthode chargée : " + charged);
            print("[CHEMIN] " + `/api/${dir}${comp}`);
        }
        else {
            console.log("Aucun fichier api.js n'existe");
            continue;
        }
    }
});
export default function load_api(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiDirs = fs.readdirSync(path.join(__dirname, "public", "api")).filter(file => {
            const stat = fs.statSync(path.join(__dirname, "public", "api", file));
            return stat.isDirectory() && file !== "lang_api";
        });
        const langApiDirs = fs.readdirSync(path.join(__dirname, "public", "api", "lang_api")).filter(file => {
            const stat = fs.statSync(path.join(__dirname, "public", "api", "lang_api", file));
            return stat.isDirectory();
        });
        showTable(apiDirs);
        try {
            yield resolve_api(app, apiDirs);
            yield resolve_api(app, langApiDirs, path.join("api", "lang_api"), "/:lang");
        }
        catch (err) {
            console.error(err);
            process.exit(1); // Exit with error code 1 to indicate failure.
        }
    });
}
