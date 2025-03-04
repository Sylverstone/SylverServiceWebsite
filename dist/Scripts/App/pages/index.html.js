var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
import { setPageData } from "../setPageData.js";
export const is_string_array = (value) => {
    return Array.isArray(value) && value.every(v => typeof v === "string");
};
function setup_accueil(template, lang, pages) {
    return __awaiter(this, void 0, void 0, function* () {
        const urlBase = process.env.URL;
        console.log(`${urlBase}api/getImage`);
        const response = yield fetch(`${urlBase}api/getImage`);
        const images_path = yield response.json();
        if (!is_string_array(images_path))
            return "";
        console.log(images_path);
        let Imageshtml = "";
        Imageshtml += "<aside id=\"ImagesSylverservice\">";
        const BaseElementImage = "<img src=\"/{{src}}\" alt=\"Images de l'application\">";
        let elementImage;
        images_path.forEach(path => {
            elementImage = BaseElementImage.replace("{{src}}", path);
            Imageshtml += "\n" + elementImage;
        });
        Imageshtml += "\n</aside>";
        template = template.replace("{{images}}", Imageshtml);
        setPageData(pages, "/:lang", template, lang);
        return template;
    });
}
export default setup_accueil;
