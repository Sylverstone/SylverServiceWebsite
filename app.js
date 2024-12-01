const express = require('express');
const path = require('path');

const app = express();

app.use('/Css', express.static(path.join(__dirname, '/Css')));
app.use('/Scripts', express.static(path.join(__dirname, '/Scripts')));
app.use('/pages', express.static(path.join(__dirname, '/pages')));
app.use('/Images', express.static(path.join(__dirname, '/Images')));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    console.log(req.query());
    return res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/form', (req, res) => {
    console.log(req.query);
    return res.send('<script>alert("Votre message a été prit en compte"); window.location.assign("index.html")</script>');
});


app.listen(80, () => {
    console.log('Server running on port 80');
})