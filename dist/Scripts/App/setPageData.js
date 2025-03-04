export const setPageData = (page, url, template, lang) => {
    page[url]["template"] = template;
    page[url]["isComplete"] = true;
    page[url]["lang"] = lang;
};
