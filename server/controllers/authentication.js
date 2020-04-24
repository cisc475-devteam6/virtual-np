const jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
    User = require('../models/User'),
    config = require('../config/config'),
    securityService = require('../security/security');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 //in seconds
    });
}
function validatedBirthdate(birthdate) {
    var current = new Date();
    var age = current.getFullYear() - birthdate.getFullYear();
    var m = current.getMonth() - birthdate.getMonth();
    var d = current.getDay() - birthdate.getDay();
    return age >=0 && m >= 0 && d >=0;
}
//========================================
// Login Route
//========================================
exports.login = function(req, res, next) {
    User.findOne({email: req.body.email}, function (err, user) {
        if(err){ return res.status(400).json({error: "bad data"}); }
        if(!user){ return res.status(400).json({error:'Your login details could not be verified. Please try again.'}); }
        user.comparePassword(req.body.password, function(err, isMatch){
            if(err){ console.log(err); return res.status(400).json({error: "bad data2"}); }
            if(!isMatch){ return res.status(400).json({error:'Your login details could not be verified. Please try again.'}); }
            let userInfo = user.toJson();
            res.status(200).json({
                token: 'Bearer ' + generateToken(userInfo),
                user: userInfo
            });
        });
    });
    
    
}

exports.authorize = function(req, res, next){
    return res.status(200).json({
        validated: true
    })
}
//========================================
// Registration Route
//========================================
exports.register = function (req, res, next) {
    // Check for registration errors
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const passwordC = req.body.passwordC;
    const gender = req.body.gender;
    const age = req.body.age;
    const birthdate = req.body.birthdate;
    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }
    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
    }
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }
    if (!passwordC) {
        return res.status(422).send({ error: 'You must enter a confirm password.' });
    }
    if (passwordC !== password) {
        return res.status(422).send({ error: 'Password does not match.' });
    }
    if (!gender) {
        return res.status(422).send({ error: 'You must enter a gender' });
    }
    if (!age) {
        return res.status(422).send({ error: 'You must enter a age' });
    }
    if (!birthdate){
        return res.status(422).send({ error: 'you must enter a birthdate' });
    }
    if (!validatedBirthdate(birthdate)){
        return res.status(422).send({ error: 'you must be 18 years old or older'})
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }
        if (existingUser) {
            return res.status(422).send({ error: 'That email address is already in use.'});
        } else {
            let user = new User({
                email: email,
                password: password,
                role: securityService.roles.REQUIRE_CLIENT,
                profile: { firstName: firstName, lastName: lastName , gender: gender, age:age}
            });
            user.save(function (err, user) {
                if (err) { return next(err); }
                let userInfo = user.toJson();
                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user: userInfo
                });
            });
        }
    });
}