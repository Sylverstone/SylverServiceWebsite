import express from 'express';
import {formRoute,getImageRoute,handle404,redirectPage,setupAppUse, setupSitePageAvailable } from './Scripts/App/router.js';
import __dirname from './dirname.js';
import { middleware } from './Scripts/App/middleware.js';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
dotenv.config()
const app = express();

app.use(cookieParser(process.env.SECRET))

app.use(middleware)

setupAppUse(app);

redirectPage(app);

setupSitePageAvailable(app);

getImageRoute(app);

app.get("/lang-cookie",(req,res) => {
    console.log(res.cookie());
    return res.redirect(req.url);
})
formRoute(app);

handle404(app);
app.listen(80, () => {
    console.log('Server running on port 80');
    console.log("http://localhost");
})
