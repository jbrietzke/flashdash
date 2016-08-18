let thing = {};


thing.wrongUserMessage = "Can't access data for that user"

thing.ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send("You must be logged in");
    }
};

thing.ensureRightUser = function (req, res, next) {
    // Authenticated AND the user ID in the route is the right one.  Caller MUST user ":userId"
    if (req.user.id === +req.params.userId) {
        next();
    } else {
       res.status(401).send(thing.wrongUserMessage);
    }
};


module.exports = thing;