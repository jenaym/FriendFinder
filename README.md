# Friend-Finder

## Overview:
Friend Finder is a compatibility-based application for individuals seeking new friends. This application utilizes the npm packages [Express](https://www.npmjs.com/package/express) and [Path](https://www.npmjs.com/package/express). This full-stack site takes in the results from the user's survey, and compares their answers to answers given by other users. The compatibility survey has 10 questions, and answers are given on a scale of 1-5 based on how much the user agrees or disagrees. Once a best friend match is found, the application displays the name and picture of the match to the current user.

## Demo Video Links:
- Terminal Demo Video: https://drive.google.com/file/d/1n1Q_k7aHwu4pM1B1HczKu6uJRJ3sAkyb/view
- Website Demo Video: https://drive.google.com/file/d/1bGMapc_hFmTzioml-jEyYXId4m-LhCSD/view

## Technologies Used:
- Node.js
- JavaScript
- Express
- Path
- jQuery

  
## Required npm Packages:
  * [Express](https://www.npmjs.com/package/express)

  * [Path](https://www.npmjs.com/package/path)
  

## Code Explanatiom: 

  * [server.js]
    * Requires the npm packages Express and Path
    * Sets up Express app to handle data parsing
    * Requires API and HTML routes
    * Starts the server to begin listening 
  
  * [html-routes.js]
    * Includes two routes:
      *  A GET Route to /survey which displays the survey page.
      *  A USE route that leads to home.html which displays the home page.

  * [api-routes.js]
    * Includes two routes: 
      * A GET route with the url /api/friends. This is used to display a JSON of all possible friends
      * A POST route /api/friends. This is used to handle incoming survey results and handles the compatibility logic.
    * Compatibility Logic:
      * Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
      * Then the difference between the user's scores against other users' scores is calculated, question by question to eventually calculate the `totalDifference`.
          * Example:
                User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
                User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
                Total Difference: 2 + 1 + 2 = 5
                The person with the closest match will be the one with the "least" amount of difference.
    
  * [friends.js]
    * Stores the current user's and past users survey results in the array `FriendsArray`.

## Install Application to your Personal Machine
    git clone https://github.com/jenaym/FriendFinder.git
    cd FriendFinder
    npm install
    node server.js


## Author:
  Jenay McAuley
