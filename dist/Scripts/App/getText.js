const traduction_obj = {
    "en": () => import("./lang/en.js").then(module => module.default),
    "fr": () => import("./lang/fr.js").then(module => module.default)
};
export const getTraduction = (lang) => {
    return traduction_obj[lang]();
};
