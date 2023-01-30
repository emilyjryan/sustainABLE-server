// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../../models')

// ROUTES

// POST /favorites -- add a favorite to the users favHabits array

module.exports = router