const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const router = express.Router(),
  visitRoutes = express.Router({mergeParams: true});
const passportService = require('../security/passport'),
      securityService = require('../security/security'),
      VisitController = require('../controllers/visit');

//================CLIENT ROUTES===================//
//GET		api/visits/:id
router.get('/:id', passportService.requireAuth, VisitController.show);
router.use('/:id', visitRoutes);

//GET	api/visits/:id/symptoms 
visitRoutes.get('/symptoms', passportService.requireAuth, VisitController.indexSymptoms);
//POST	api/visits/:id/symptoms
visitRoutes.post('/symptoms', passportService.requireAuth, VisitController.updateSymptoms);
//POST 	api/:userid/visits/:id/diagnosis
visitRoutes.post('/diagnosis', passportService.requireAuth, VisitController.updateDiagnosis);
//POST 	api/visits/:id/notes
visitRoutes.post('/notes', passportService.requireAuth, VisitController.updateNotes);
//================================================//
//================ADMIN ROUTES====================//
const npRouter = express.Router({mergeParams: true}),
      npVisitRouter = express.Router({mergeParams: true});
router.use('/np', npRouter);
//GET   api/visits/np/:userid
npRouter.get('/:userid', passportService.requireAuth, VisitController.npIndex);
npRouter.use('/:userid', npVisitRouter);

//GET		api/visits/np/:userid/:id
npVisitRouter.get('/:id', passportService.requireAuth, VisitController.npShow);
//POST	api/visits/np/:userid/:id/symptoms 
npVisitRouter.post('/:id/symptoms', passportService.requireAuth, VisitController.npUpdateSymptoms);
//POST 	api/visits/np/:userid/:id/diagnosis
npVisitRouter.post('/:id/diagnosis', passportService.requireAuth, VisitController.npUpdateDiagnosis);
//POST 	api/visits/np/:userid/:id/notes
npVisitRouter.post('/:id/notes', passportService.requireAuth, VisitController.npUpdateNotes);
//POST 	api/visits/np/:userid/:id/priv_notes
npVisitRouter.post('/:id/priv_notes', passportService.requireAuth, VisitController.npUpdatePrivateNotes);
//================================================//
module.exports = router;