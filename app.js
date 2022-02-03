const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv/config");



//routers
const generate = require("./router/generate");
const barcode = require("./router/barcode");

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use(`/`, generate);
app.use(`/`, barcode);


app.listen(process.env.PORT || 3000, () => {
    console.log('API listening on HTTPS port ' + port + '.');
 });
 
