import { print } from "../../../../Scripts/App/devFonction.js";
const listToString = (list, separator = "/") => {
    let string = "";
    list.forEach(element => {
        if (element !== "")
            string += element + separator;
    });
    return string;
};
export const get = (req, res) => {
    const referrer = req.get("Referrer");
    if (typeof referrer === "undefined")
        return res.redirect(301, "/404/404.html");
    let listCible = referrer.split("/").slice(3);
    listCible[0] = req.params.lang;
    const final_req = listToString(listCible);
    print(`finalList : ${final_req}`);
    return res.redirect(301, `/${final_req}`);
};
