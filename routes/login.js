const express = require("express")
const router = require("./index.js")
const nodemailer = require("nodemailer")
const user = require("../models/users.js")

async function sendMail(title,texto, destin = "kawe@imaild.com") {
    //setando o transpoter, com as premissas basicas
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: process.env.USER_NAME,
             pass: process.env.PASS_WORD
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

  //name, e email recebidos no query, falta adiciona-lo banco de dados
  const {name, email} = req.params
  if( (name == "") || (email == "") ) {
    res.render("index.hbs", {error: "Preencha os campos corretamente"})
  } else {
    //checando se ja existe o email
    const find = await user.findOne({email: email})
    // const create = (find === null ) ? await user.create({name: name, email: email}) : null
    console.log(find)
    const titleToSend = "meu titutlo bonito 2"
    const textToSend = "<p>Show de bola env</p>"
    sendMail(titleToSend, textToSend, email)
    res.send("sucefull send email")
  }

})

