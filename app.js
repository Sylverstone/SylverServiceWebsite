import express from 'express';
import {formRoute,getImageRoute,handle404,setupAppUse, setupSitePageAvailable } from './Scripts/App/router.js';
import __dirname from './dirname.js';

const app = express();

setupAppUse(app);


setupSitePageAvailable(app);

getImageRoute(app);


formRoute(app);

handle404(app);

console.log("testing")
app.listen(80, () => {
    console.log('Server running on port 80');
})
