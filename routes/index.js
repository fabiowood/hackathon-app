/* eslint-disable no-else-return */
require('dotenv').config()

// ########################### Dependencies #######################

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const mongoose = require('mongoose');
const path = require('path');

// ########################### Require Models #######################



// ########################### Main Page #######################

router.get('/', (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  res.render('index');
  console.log(ip)
});


module.exports = router;
