const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');
const path = require('path');
const auth = require('http-auth');

const router = express.Router();

const { body, validationResult } = require('express-validator');
const Registration = mongoose.model('Registration');

const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

router.get('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});

router.post('/',
  [
    body('name')
      .isLength({ min: 1 })
      .withMessage('Please enter a name'),
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
  ], 
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const registration = new Registration(req.body);
      registration.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
    } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  }
);

router.get('/registrations', auth.connect(basic), (req, res) => {
  Registration.find()
    .then((registrations) => {
      res.render('index', { title: 'Listing registrations', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

module.exports = router;