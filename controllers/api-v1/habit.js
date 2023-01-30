// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../../models')

// ROUTES

// Get /habits -- get all habits
router.get('/', async (req, res) => {
    try {
        const allHabits = await db.Habit.find({})
        res.json(allHabits)
        console.log(allHabits)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
})
// GET /habits/:id -- show habit details
router.get('/:id', async (req, res) => {
    try {
        const habitDetails = await db.Habit.findById(req.params.id)
        if (!habit) {
            res.status(404).json({ msg: 'Habit not found' })
            return 
        }
        res.json({ habitDetails })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

// POST /habits -- create route
router.post('/new', async (req, res) => {
    try {
        const newHabit = await db.Habit.create(req.body)
        res.json({ newHabit })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})


// exporting router
module.exports = router