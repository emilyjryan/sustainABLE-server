// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../../models')
const authLockedRoute = require('./authLockedRoute')

// ROUTES

// POST /favorites -- add a favorite to the users favHabits array
router.post('/', authLockedRoute, async (req, res) => {
    try {
        const user = res.locals.user
        if (!req.body.id) {
            res.status(404).json({ msg: 'Habit not found' })
            return
        }
        user.favHabits.push(req.body.id)
        await user.save()
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

//GET route
router.get('/', authLockedRoute, async (req, res) => {
    console.log(res.locals.user)
    res.json({favHabits: res.locals.user.favHabits})
})

module.exports = router