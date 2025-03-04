import { handle404, setupAppUse, setupSitePageAvailable } from './Scripts/App/router.js';
import { middleware } from './Scripts/App/middleware.js';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import load_api from './Scripts/App/Loader/Api/loadApi.js';
import express from 'express';
dotenv.config();
const app = express();
app.use((req, res, next) => {
    // Autorise le cache MAIS invalide-le quand la langue change
    res.set({
        'Cache-Control': 'private, no-cache, max-age=0',
        'Vary': 'Cookie' // 🔥 Indique que le contenu varie selon les cookies
    });
    next();
});
app.use(cookieParser());
app.use(middleware);
setupAppUse(app);
setupSitePageAvailable(app);
load_api(app).then(() => {
    app.get("/api/n", (req, res) => {
        return res.json({ what: "the fuck" });
    });
    handle404(app);
    app.listen(3000, () => {
        console.log('Server running on port 3000');
        console.log("http://localhost:3000");
    });
});
