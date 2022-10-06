const express = require("express");
const app = express();
const path = require ("path");

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(require("./src/routes/mails.js"));

app.use(express.static(path.join(__dirname, "/")));

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () =>{
    console.log(`Server en puerto ${PUERTO} king`)
});
