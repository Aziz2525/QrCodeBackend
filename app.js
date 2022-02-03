const express = require("express");
const https = require('https');
const app = express();

const cors = require("cors");
const fs = require('fs');
require("dotenv/config");

const privateKey = fs.readFileSync('/etc/letsencrypt/live/apithon.com.tr/privkey.pem', 'utf8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/apithon.com.tr/fullchain.pem', 'utf8')
const credentials = {
   key: privateKey,
   cert: certificate
}

//routers
const generate = require("./router/generate");
const barcode = require("./router/barcode");

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use(`/${process.env.VERSION}`, generate);
app.use(`/${process.env.VERSION}`, barcode);


https.createServer(credentials, app).listen(process.env.PORT || 3000, () => {
    console.log('API listening on HTTPS port ' + port + '.');
 });
 
