
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
export const get = (req,res) => 
{
    const referrer = req.get("Referrer");
    let listCible = referrer.split("/").slice(3);
    listCible[0] = req.params.lang;
    const final_req = listToString(listCible);
    print(`finalList : ${final_req}`);
    return res.redirect(301,`/${final_req}`);
}