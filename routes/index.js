// stores express module into express variable
const express = require('express') 
// creates a new router instance from express
const router = express.Router()
// loads the exported function from /model/wyr_question that randomly picks the question
const randomWYRQuestion = require('../model/wyr_questions')

// defines a route that listens to GET requests at /
router.get('/', function(req, res, next) {
    res.send('Placeholder for home page')
})

// same as above, but listens for /wyr
router.get('/wyr', function(req, res, next) {
    // const wyr = {
    //     'question': 'Live in a circle house or a triangle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'
    // }

    const wyr = randomWYRQuestion()
    res.json(wyr)
})

// exports this function so it can be imported by other files
module.exports = router