import { lang_t } from "./getText";
import { page_t } from "./pagesHtml";
import { pages_key_t } from "./router";

export const setPageData = (page : page_t, url : pages_key_t, template : string, lang : lang_t) => 
{
    page[url]["template"] = template;
    page[url]["isComplete"] = true;
    page[url]["lang"] = lang;
}