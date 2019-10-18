const express = require("express")
const router = require("./index.js")
const nodemailer = require("nodemailer")
const user = require("../models/users.js")
const admin = require("../models/admin.js")


//----------------------- FUNCTIONS -----------------------------------------------
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

function randomString() {
  return `${Math.random().toString(36).substring(7)}`
}

//------------------- LOGIN MAIN -------------------------------------------
router.get("/login", async(req, res) => {
  res.render("admin/admin-get.hbs")
  console.log(randomString())
})


router.post("/login", async(req, res) => {
  
  const {login, password} = req.body
  //findOne se falha retorna null
  const result = await admin.findOne({login: login})

  if( (result !== null) & (result.password === password) ) {
    let send = {logado: 1, _id: result._id}
    res.cookie("logged" , send, {
      maxAge: 1000 * 60 * (60 * 24), //60 minutos  * 24 hrs
      httpOnly: false,
    }).redirect("/page-adm")
  } else {
    res.send("fail")
  }
})

//-------------------- PAGINA DO ADM ---------------------------------------
router.get("/page-adm", async(req, res) => {

  const logged = req.cookies.logged
  const admInfo = (logged !== undefined) ? await admin.findById(logged._id).populate("allUsers") : null
  console.log(admInfo)
  if(admInfo !== null) {
    res.render("admin/admin-main.hbs", {admInfo})    
  } else {
    res.send("Not Have Permission to stay here")
  }
})

//-------------------- SENDMAIL CLIENT --------------------------------------
router.get("/login/sendmail", async(req, res) => {
  //name, e email recebidos no query, falta adiciona-lo banco de dados
  let {email, name} = req.query
  let temp = name
  name = email
  email = temp
  if( (name == "") || (email == "") ) {
    res.render("index.hbs", {error: "Preencha os campos corretamente"})
  } else {
    //checando se ja existe o email
    const find = await user.findOne({email: email})
    const create = (find === null ) ? await user.create({name: name, email: email}) : null
    console.log(create)
    if(create !== null) {
      const adminPushUser = await admin.findOneAndUpdate({name: "test"}, { $push :{allUsers: create._id } })
      console.log(adminPushUser)
    }
    const titleToSend = "Token Desconto"
    const textToSend = `<p>Aqui o seu token de desconto <a>${randomString()}</a></p>`
    sendMail(titleToSend, textToSend, email)
    res.send("sucefull send email")
  }
})