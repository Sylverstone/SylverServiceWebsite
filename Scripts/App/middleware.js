const langue_dispos = ["fr", "en"];
const extension_interdit = ["png", "jpg", "jpeg", "svg", "ico", "txt", "xml", "js", "css","map"];

const handleReqWithNoRedirect = (url) => {
    if (!(typeof url === "string")) return ;
    return !(
        langue_dispos.some((langue_dispo) => url.startsWith(`/${langue_dispo}/`) || url.startsWith(`${langue_dispo}/`)) ||
        extension_interdit.some((ext) => url.endsWith(ext))
    );
};

export const middleware = (req, res, next) => {
    const lang = navigator.language.split("-")[0];

    if (!handleReqWithNoRedirect(req.url)) {
        return next();
    } else {

        req.lang = lang;
        let newReq = `/${lang}${req.url}`; 
        console.log("base url:", req.url);
        console.log("new request:", newReq);

        if (newReq.endsWith("/") && newReq !== `/${lang}/`) {
            newReq = newReq.slice(0, -1);
        }

        if (req.url === newReq) {
            return next();
        }

        return res.redirect(301, newReq);
    }
        
};