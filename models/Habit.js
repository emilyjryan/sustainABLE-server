const mongoose = require ('mongoose')

const HabitSchema = new mongoose.Schema({
    habit: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model('Habit', HabitSchema)