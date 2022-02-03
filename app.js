const express = require("express");
const app = express();
const cors = require("cors");
const generate = require("./router/generate");
const barcode = require("./router/barcode");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use(`/`, generate);
app.use(`/`, barcode);


app.listen(port, () => {
    console.log('API listening on HTTPS port ' + port + '.');
 });
 
