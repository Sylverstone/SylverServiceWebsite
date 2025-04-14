import { lang_t } from "./getText";
import { page_link_t, page_t } from "./pagesHtml";

export const setPageData = (page : page_t, url : page_link_t, template : string, lang : lang_t) => 
{
    page[url]["template"] = template;
    page[url]["isComplete"] = true;
    page[url]["lang"] = lang;
}