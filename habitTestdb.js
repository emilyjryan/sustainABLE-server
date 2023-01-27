const db = require('./models')

const habitCrud = async () => {
    try {
        const newHabit = await db.Habit.create({
            habit: "Ride your bike",
            description: "Ride you bike instead of driving your car",
            purpose:"reduces emissions",
            impact:"reduces emissions",
            timeSpent:20,
            imgURL:'https://www.cordiscosaile.com/wp-content/uploads/2016/11/Bicyclist-hand-signal-1024x683.png'

        })
        console.log(newHabit)

    } catch (err) {
        console.log(err);
    }
}
habitCrud()