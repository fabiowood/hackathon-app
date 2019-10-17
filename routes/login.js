const express = require("express")
const router = require("./index.js")


router.get("/adm", async(req, res) => {
  res.render("admin/admin-get.hbs")
})