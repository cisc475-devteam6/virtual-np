User = require('../models/User'),

exports.roles = {
    REQUIRE_ADMIN : "Admin",    //Admin: NP, or others who are allowed to view all user data
    REQUIRE_OWNER : "Owner",    //Currently unused
    REQUIRE_CLIENT : "Client",  //Client: Visitor with an account. Allowed to edit their visit data
    REQUIRE_MEMBER : "Member"}; //Currently unused

//========================================
// Authorization Middleware
//========================================

// Role authorization check
exports.roleAuthorization = function (role) {
    return function (req, res, next) {
        const user = req.user;

        User.findById(user._id, function (err, foundUser) {
            if (err) {
                res.status(422).json({ error: 'No user was found.' });
                return next(err);
            }

            // If user is found, check role.
            if (foundUser.role == role) {
                return next();
            }

            res.status(401).json({ error: 'You are not authorized to view this content.' });
            return next('Unauthorized');
        });
    }
}