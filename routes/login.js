const express = require("express")
const router = require("./index.js")
const nodemailer = require("nodemailer")

async function sendMail(title,texto, destin = "kawe@imaild.com") {
    //setando o transpoter, com as premissas basicas
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: "hacktonironhacker@gmail.com",
             pass: "saulo@gabriel123"
         }
     });
  
     const mailOptions = {
      from: 'hacktonironhacker@gmail.com', // sender address
      to: destin, // list of receivers
      subject: title, // Subject line
      html: texto// plain text body, use of tags html for it
    };
  
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
   });
}

router.get("/login", async(req, res) => {
  res.render("admin/admin-get.hbs")
})

router.get("/login/sendmail", async(req, res) => {

  const titleToSend = "meu titutlo bonito"
  const textToSend = "<p>Show de bola</p>"
  sendMail(titleToSend, textToSend)
  res.send("sucefull send email")

})

