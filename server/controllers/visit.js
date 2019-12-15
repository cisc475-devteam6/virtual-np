const User = require('../models/User'), 
    Visit = require('../models/Visit');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const securityService = require('../security/security');

//GET   api/visits                  VisitController.index
exports.index = function(req, res, next) {
    Visit.find({user_id: req.user.toJson()._id}, function(err, visits) {
        if(err){ console.log(err); return res.status(400).json({error: "bad data"}); }
        if(!visits){ return res.status(400).json({error:'No visits attribute found for this user.'}); }
        visitsInfo = [];
        count = 0;
        visits.forEach(visit => {
            visitsInfo[count] = (visit.toJson());
            count += 1;
        });
        res.status(200).json({
            visits: visitsInfo
        });
    });
}

//POST 	api/visits                  VisitController.create
exports.create = function(req, res, next) {
    //get visit fields from request
    id = req.user.toJson()._id;
    symptoms = req.body.symptoms;
    diagnosis = req.body.diagnosis;
    //check for existing visit? maybe add a time-based visit limit 
    //(i.e. a user can only create 1 visit per day)
    //new information within 1 days time can be updates to current visit? maybe in the future

    //make new visit Model
    let visit = new Visit({
        user_id: id,
        symptoms: symptoms,
        diagnosis: diagnosis
    });
    //save it to the db
    visit.save(function (err, visit) {
        if (err) { return next(err); }
        let visitInfo = visit.toJson();
        res.status(201).json({
            visit: visitInfo
        });
    });
}
//GET	api/visits/:id            VisitController.show
exports.show = function(req, res, next) {
    Visit.findOne({user_id: req.user.toJson()._id, _id: req.params.id}, function(err, visit) {
        if(err){ return res.status(400).json({error: "bad data"}); }
        if(!visit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
        visitsInfo = visit.toJson();
        res.status(200).json({
            visit: visitsInfo
        });
    });
}

//GET	api/visits/:id/symptoms   VisitController.indexSymptoms
exports.indexSymptoms = function(req, res, next) {
    Visit.findOne({user_id: req.user.toJson()._id, _id: req.params.id}, function(err, visit) {
        if(err){ return res.status(400).json({error: "bad data"}); }
        if(!visit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
        symptomsInfo = visit.toJson().symptoms;
        res.status(200).json({
            symptoms: symptomsInfo
        });
    });
}

//POST	api/visits/:id/symptoms   VisitController.updateSymptoms
exports.updateSymptoms = function(req, res, next) {
    Visit.findOne({user_id: req.user.toJson()._id, _id: req.params.id}, function(err, existingVisit) {
        if(err){ return res.status(400).json({error: "bad data"}); }
        if(!existingVisit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
        let newSymptoms = req.body.symptoms;
        if (existingVisit) {
            existingVisit.symptoms = newSymptoms;
            existingVisit.save(function (err, visit) {
                if (err) { return next(err); }
                let visitInfo = existingVisit.toJson();
                res.status(201).json({
                    visit: visitInfo
                });
            });
        }else{
            return res.status(400).json({error: "No visit found with this ID."});
        }
    });
}

//POST 	api/visits/:id/diagnosis  VisitController.updateDiagnosis
exports.updateDiagnosis = function(req, res, next) {
    Visit.findOne({user_id: req.user.toJson()._id, _id: req.params.id}, function(err, existingVisit) {
        if(err){ return res.status(400).json({error: "bad data"}); }
        if(!existingVisit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
        let newDiagnosis = req.body.diagnosis;
        if (existingVisit) {
            existingVisit.diagnosis = newDiagnosis;
            existingVisit.save(function (err, visit) {
                if (err) { return next(err); }
                let visitInfo = existingVisit.toJson();
                res.status(201).json({
                    visit: visitInfo
                });
            });
        }else{
            return res.status(400).json({error: "No visit found with this ID."});
        }
    });
}

//POST 	api/visits/:id/notes  VisitController.updateNotes
exports.updateNotes = function(req, res, next) {
    Visit.findOne({user_id: req.user.toJson()._id, _id: req.params.id}, function(err, existingVisit) {
        if(err){ return res.status(400).json({error: "bad data"}); }
        if(!existingVisit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
        let newNotes = req.body.notes;
        if (existingVisit) {
            if (req.user.role == securityService.roles.REQUIRE_ADMIN){
                existingVisit.notes = newNotes;
                existingVisit.save(function (err, visit) {
                    if (err) { return next(err); }
                    let visitInfo = existingVisit.toJson();
                    res.status(201).json({
                        visit: visitInfo
                    });
                });
            }else{res.status(401).json({ error: 'You are not authorized to view this content.' });
            return next('Unauthorized');
        }
            
        }else{
            return res.status(400).json({error: "No visit found with this ID."});
        }
    });
}
//==========================ADMIN ROUTES==========================//
//GET   api/visits/np/:userid       npIndex
exports.npIndex = function(req, res, next) {
    if (req.user.role == securityService.roles.REQUIRE_ADMIN){
        Visit.find({user_id: req.params.userid}, function(err, visits) {
            if(err){ return res.status(400).json({error: "bad data"}); }
            if(!visits){ return res.status(400).json({error:'No visits attribute found for this user.'}); }
            visitsInfo = [];
            count = 0;
            visits.forEach(visit => {
                visitsInfo[count] = (visit.toNPJson());
                count += 1;
            });
            res.status(200).json({
                visits: visitsInfo
            });
        });
    }else{
        res.status(401).json({error: "Unauthorized."});
    }
}
//GET	api/visits/np/:userid/:id   npShow
exports.npShow = function(req, res, next) {
    if (req.user.role == securityService.roles.REQUIRE_ADMIN){
        Visit.findOne({user_id: req.params.userid, _id: req.params.id}, function(err, visit) {
            if(err){ return res.status(400).json({error: "bad data"}); }
            if(!visit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
            visitsInfo = visit.toNPJson();
            res.status(200).json({
                visit: visitsInfo
            });
        });
    }else{
        res.status(401).json({error: "Unauthorized."});
    }
}
//POST	api/visits/np/:userid/:id/symptoms      npUpdateSymptoms
exports.npUpdateSymptoms = function(req, res, next) {
    if (req.user.role == securityService.roles.REQUIRE_ADMIN){
        Visit.findOne({user_id: req.params.userid, _id: req.params.id}, function(err, existingVisit) {
            if(err){ return res.status(400).json({error: "bad data"}); }
            if(!existingVisit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
            let newSymptoms = req.body.symptoms;
            if (existingVisit) {
                existingVisit.symptoms = newSymptoms;
                existingVisit.save(function (err, visit) {
                    if (err) { return next(err); }
                    let visitInfo = existingVisit.toJson();
                    res.status(201).json({
                        visit: visitInfo
                    });
                });
            }else{
                return res.status(400).json({error: "No visit found with this ID."});
            }
        });
    }else{
        res.status(401).json({error: "Unauthorized."});
    }
}
//POST 	api/visits/np/:userid/:id/diagnosis     npUpdateDiagnosis
exports.npUpdateDiagnosis = function(req, res, next) {
    if (req.user.role == securityService.roles.REQUIRE_ADMIN){
        Visit.findOne({user_id: req.params.userid, _id: req.params.id}, function(err, existingVisit) {
            if(err){ return res.status(400).json({error: "bad data"}); }
            if(!existingVisit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
            let newDiagnosis = req.body.diagnosis;
            if (existingVisit) {
                existingVisit.diagnosis = newDiagnosis;
                existingVisit.save(function (err, visit) {
                    if (err) { return next(err); }
                    let visitInfo = existingVisit.toJson();
                    res.status(201).json({
                        visit: visitInfo
                    });
                });
            }else{
                return res.status(400).json({error: "No visit found with this ID."});
            }
        });
    }else{
        res.status(401).json({error: "Unauthorized."});
    }
}
//POST 	api/visits/np/:userid/:id/notes         npUpdateNotes
exports.npUpdateNotes = function(req, res, next) {
    if (req.user.role == securityService.roles.REQUIRE_ADMIN){
        Visit.findOne({user_id: req.params.userid, _id: req.params.id}, function(err, existingVisit) {
            if(err){ return res.status(400).json({error: "bad data"}); }
            if(!existingVisit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
            let newNotes = req.body.notes;
            if (existingVisit) {
                if (req.user.role == securityService.roles.REQUIRE_ADMIN){
                    existingVisit.notes = newNotes;
                    existingVisit.save(function (err, visit) {
                        if (err) { return next(err); }
                        let visitInfo = existingVisit.toJson();
                        res.status(201).json({
                            visit: visitInfo
                        });
                    });
                }else{res.status(401).json({ error: 'You are not authorized to view this content.' });
                return next('Unauthorized');
            }
                
            }else{
                return res.status(400).json({error: "No visit found with this ID."});
            }
        });
    }else{
        res.status(401).json({error: "Unauthorized."});
    }
}
//POST 	api/visits/np/:userid/:id/priv_notes         npUpdatePrivateNotes
exports.npUpdatePrivateNotes = function(req, res, next) {
    if (req.user.role == securityService.roles.REQUIRE_ADMIN){
        Visit.findOne({user_id: req.params.userid, _id: req.params.id}, function(err, existingVisit) {
            if(err){ return res.status(400).json({error: "bad data"}); }
            if(!existingVisit){ return res.status(400).json({error:'No visit attribute found for this user.'}); }
            let newPrivNotes = req.body.priv_notes;
            if (existingVisit) {
                if (req.user.role == securityService.roles.REQUIRE_ADMIN){
                    existingVisit.priv_notes = newPrivNotes;
                    existingVisit.save(function (err, visit) {
                        if (err) { return next(err); }
                        let visitInfo = existingVisit.toNPJson();
                        res.status(201).json({
                            visit: visitInfo
                        });
                    });
                }else{res.status(401).json({ error: 'You are not authorized to view this content.' });
                return next('Unauthorized');
            }
                
            }else{
                return res.status(400).json({error: "No visit found with this ID."});
            }
        });
    }else{
        res.status(401).json({error: "Unauthorized."});
    }
}