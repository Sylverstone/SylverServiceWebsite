import express from 'express';
import {formRoute,getImageRoute,handle404,redirectPage,setupAppUse, setupSitePageAvailable } from './Scripts/App/router.js';
import __dirname from './dirname.js';
import { middleware } from './Scripts/App/middleware.js';

const app = express();

app.use(middleware);

setupAppUse(app);

redirectPage(app);

setupSitePageAvailable(app);

getImageRoute(app);


formRoute(app);

handle404(app);

console.log("testing")
app.listen(80, () => {
    console.log('Server running on port 80');
    console.log("http://localhost");
})
