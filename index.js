const express = require('express');
const app = express();
const path = require ('path');
const bodyParser = require('body-parser');


// Routing
app.use(express.static(path.join(__dirname + "/")));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

// Routers
const routerMails = require ('./src/routes/mails.js')
app.use(routerMails);


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () =>{
    console.log(`Server en puerto ${PUERTO} king`)
});
