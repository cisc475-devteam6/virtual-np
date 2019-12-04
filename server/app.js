const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const loginRoute = require('./routes/login');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const AuthenticationController = require('./controllers/authentication'),
      passportService = require('./security/passport'),
      VisitController = require('./controllers/visit');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/login', loginRoute);
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
const visitsRoutes = express.Router();
const visitRouter = require('./routes/visit');
// /api/visits
//GET		api/visits/
apiRoutes.get('/visits', passportService.requireAuth, VisitController.index);
//POST 	api/visits/
apiRoutes.post('/visits', passportService.requireAuth, VisitController.create);
apiRoutes.use('/visits',visitRouter);

// apiRoutes.use('/visits', passportService.requireAuth, VisitController.index);
apiRoutes.use('/auth', authRoutes);
// /api/auth/register
authRoutes.post('/register', AuthenticationController.register);
// /api/auth/login
authRoutes.post('/login', AuthenticationController.login);
// /api/auth/authorize
authRoutes.get('/authorize',passportService.requireAuth,AuthenticationController.authorize);

otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
    res.json({user: req.user.toJson()})
});
apiRoutes.use('/stuff',otherRoutes);
app.use('/api', apiRoutes);

module.exports = app;