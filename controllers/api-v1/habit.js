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

// GET/habits/:id -- get habit by :id
// router.get('/:id', async (req, res) => {
//     try {
//         const habit = await db.Habit.findById(req.params.id)
//         if (!habit) {
//             res.status(404).json({ msg: "not found" })
//             return
//         }
//         res.json(habit)
//     } catch (err) {
//         console.log(err)
//         if (err.kind === "ObjectId") {
//             res.status(404).json({ msg: err.message })
//         } else {
//             res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
//         }
//     }
//  })


// exporting router
module.exports = router