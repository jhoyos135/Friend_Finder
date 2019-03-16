const friends = require('../data/friends');
const express = require('express');
const bodyParser = require('body-parser');
// const router = express.Router();

module.exports = (app) => {

    // get all json list
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    });

    // saves the new user the array, and return a match
    app.post('/api/friends', (req, res) => {
        let newFriend = req.body;
        console.log(newFriend.scores);

        // function to make user result to array of numbers
        let newScore = (arr) => {
            let newScore = [];
            for(let i in arr) {
                newScore.push(parseInt(arr[i]));
            }
            return newScore;
        };

        // function to calculate difference between two arrays
        let totalDifference = (a, b) => {
            diff = 0;
            for(let i in a) {
                diff += Math.abs(a[i] - b[i]);
            }
            return diff
        };

        // function to find minimum difference in the index
        let minIndex = (arr) => {
            if(arr.length === 0) {
                return -1;
            }

            let min = arr[0];
            let minInx = 0;
            for(let i = 1; i < arr.length; i++) {
                if(arr[i] < min) {
                    minInx = i;
                    min = arr[i]
                }
            }
            return minInx;
        };
        
        let newFriendScore = newScore(newFriend.scores);
        let currentFriendScores = [];
        let differences = [];

        for(let i in friends) {
            currentFriendScores.push(newScore(friends[i].scores));
        };

        for(let i in currentFriendScores) {
            differences.push(totalDifference(newFriendScore, currentFriendScores[i]));
        };

        let minFriend = minIndex(differences);
        let match = friends[minFriend];

        friends.push(newFriend);
        res.json(match);
        // console.log(match)

    });
}

