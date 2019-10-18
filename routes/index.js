/* eslint-disable no-else-return */
require('dotenv').config()

// ########################### Dependencies #######################

const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const ensureLogin = require('connect-ensure-login');
const mongoose = require('mongoose');
// const multer = require("multer");
const path = require('path');
const axios = require('axios');

// ########################### Require Models #######################



// ########################### Main Page #######################

router.get('/', (req, res, next) => {
  res.render('index');
});

// ########################### Manage Roles #######################

const checkAdmin  = checkRoles('admin');

function checkRoles(role) {
  return function(req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    } else {
      res.redirect('/login');
    }
  };
}

// ########################### Function Ensure Authentication #######################

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// ########################### Admin Login #######################

// router.get('/login', (req, res, next) => {
//   res.render('login');
// });

// router.post('/login', (req, res, next) => {
//   res.render('admin-page');
// });

// // ########################### Admin Logout #######################

// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/login');
// });

// ########################### Admin Page #######################



// ########################### Client - Sign Up #######################




module.exports = router;
