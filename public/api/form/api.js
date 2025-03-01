import sendmail from "./sendMail.js";
export const get = (req,res) => 
{
    print(req.query);
    if(sendmail(req.query))
    {
        return res.send('<script>alert("Votre formulaires a été envoyé"); window.location.assign("index.html")</script>');
    }
    return res.send('<script>alert("Une erreur a eu lieu :( ); window.location.assign("index.html")</script>')
}