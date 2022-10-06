const express = require("express");

const nodemailer = require("nodemailer");

const routerMails = express.Router();

// Middleware
// routerMails.use(express.json());
// ----------------

// POST, envia info
// routerMails.post('/', (req, res) =>{
//     let cursoNuevo = req.body;
//     programacion.push(cursoNuevo);
//     res.send(programacion);
// });
// ----------------
// -------------------------------------------

// app.post('/send-email',function(req,res){
//     var username = req.body.username;
//     var htmlData = 'Hello:' + username;
//     res.send(htmlData);
//     console.log(htmlData);
//  });

// -------------------------------------------

routerMails.post("/send-email", async (req, res) => {
    const { name, email, phone, message }= req.body;
    console.log(req.body);

    contentHTML=`
        <h2>You have a new message from:</h2>
        <ul>
            <li><h3>Name: ${name}</h3></li>
            <li><h3>Email: ${email}</h3></li>
            <li><h3>Phone: ${phone}</h3></li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
    `;

    console.log(contentHTML);

    const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:"amustino30@gmail.com",
            pass: "smrlocisaknpkklm"
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    const info = await transporter.sendMail({
        from:'"Amustino projects 👻" <amustino30@gmail.com',
        to: "agustintcruz@gmail.com, amustino30@gmail.com",
        subject:'Formulario de contacto',
        html:contentHTML
    });
    console.log(' Message sent ', info.messageId);

    res.redirect("https://kbcruz6.github.io/MixJsLittleProjects");   
});

module.exports=routerMails;

// https://kbcruz6.github.io/MixJsLittleProjects