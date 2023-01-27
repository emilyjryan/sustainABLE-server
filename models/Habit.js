// require mongoose 
const mongoose = require ('mongoose')

const HabitSchema = new mongoose.Schema({
    habit: {
        type: String
    },
    description: {
        type: String
    },
    purpose: {
        type: String
    },
    impact: {
        type: String
    },
    timeSpent: {
        type: Number
    },
    imgURL: {
        type: String
    }
}, {
    timestamps: true
}
)


module.exports = mongoose.model('Habit', HabitSchema)