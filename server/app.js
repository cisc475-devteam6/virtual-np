const express = require('express');
const chatRoutes = require('./routes/chat');
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require("nodemailer");
const logger = require('morgan');
const app = express();


const AuthenticationController = require('./controllers/authentication'),
      passportService = require('./security/passport'),
      VisitController = require('./controllers/visit');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/chat', chatRoutes);
app.use(express.static('public'));


app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Initializing route groups
const apiRoutes = express.Router(),
authRoutes = express.Router(),
otherRoutes = express.Router();
const visitRouter = require('./routes/visit');

//GET		/api/visits/
apiRoutes.get('/visits', passportService.requireAuth, VisitController.index);
//POST 	/api/visits/
apiRoutes.post('/visits', passportService.requireAuth, VisitController.create);
// the rest of the routes under /api/visits/... are in visitRouter
apiRoutes.use('/visits',visitRouter);

// all authorization routes are in authRoutes
apiRoutes.use('/auth', authRoutes);

//POST /api/auth/register
authRoutes.post('/register', AuthenticationController.register);
//POST /api/auth/login
authRoutes.post('/login', AuthenticationController.login);
//GET /api/auth/authorize
authRoutes.get('/authorize',passportService.requireAuth,AuthenticationController.authorize);
//GET /api/stuff/info
otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
    res.json({user: req.user.toJson()})
});
apiRoutes.use('/stuff',otherRoutes);
//all api routes are in apiRoutes
app.use('/api', apiRoutes);

//mailstuff
app.post('/sendmail', (req, res) => {
  let user = req.body;
  let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'virtualnptest@gmail.com',
    pass: 'vnptest2020'
  }
  });
  
  let mailOptions = {
    from: '"Virtual NP" <no-reply@virtualnp.com>',
    to: `<${user.email}>`,
    subject: `${user.subj}`,
    text: `${user.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      return console.log(error);
    }
    console.log('Message sent');
  })
});

module.exports = app;