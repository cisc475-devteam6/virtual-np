const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const User = mongoose.model('User');

router.get('/', (req, res) => {
  res.render('login', { title: 'Sign In' });
});

router.post('/',
  [
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter your email'),
    body('password')
      .isLength({ min: 1 })
      .withMessage('Please enter your password')
  ], 
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      // const login = new Login(req.body);
      console.log(JSON.stringify(req.body));
      User.findOne(req.body).exec(function(err, user){
        if(err)
        console.log(user);
        res.send(user);
      });
    } else {
      res.render('login', {
        title: 'Sign in form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);

module.exports = router;