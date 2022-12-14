const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

//! Routing
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//! Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

//! Routers
const routerMails = require("./src/routes/mails.js");
app.use(routerMails);

//! Connection
const PUERTO = process.env.PORT || 5000;
app.listen(PUERTO, () => {
  console.log(`Server en puerto ${PUERTO} king`);
});

//! Export the Express API
module.exports = app;
