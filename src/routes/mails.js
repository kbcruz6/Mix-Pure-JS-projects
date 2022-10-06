const { Router } = require("express");
const { contentType } = require("express/lib/response");
const router = Router ();
const nodemailer=require("nodemailer");

router.post("/send-email", async (req,res)=>{
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

    const info=await transporter.sendMail({
        from:'"Amustino projects 👻" <amustino30@gmail.com',
        to: "agustintcruz@gmail.com, amustino30@gmail.com",
        subject:'Formulario de contacto',
        html:contentHTML
    });
    console.log('Message sent', info.messageId);

    res.redirect("https://kbcruz6.github.io/MixJsLittleProjects/");   
});

module.exports=router;
