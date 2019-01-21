
// LOAD DATA
var friendsData = require("../data/friends");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });


// A POST routes /api/friends. This will be used to handle incoming survey
    // results. This route will also be used to handle the compatibility logic.

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        //Get current users question scores
        var userAnswers = req.body;

        // Get users score as integers
        for (var i = 0; i < userAnswers.scores.length; i++) {
            userAnswers.scores[i] = parseInt(userAnswers.scores[i]);
        }

        var friendIndex = 0;
        var minDifference = 100;

        // check friends in friendsArray for best match
        for (var i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < 10; j++) {
                var scoreDif = Math.abs(friendsData[i].scores[j] - userAnswers.scores[j]);
                totalDifference += scoreDif;
            }

            if (totalDifference < minDifference) {
                minDifference = totalDifference;

                friendIndex = i;
            }
        }

        // After match is found, Add current user to friends api
        friendsData.push(userAnswers);

        // Send best friend match
        res.json(friendsData[friendIndex]);

    });

};