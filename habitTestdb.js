const db = require('./models')

const habitCrud = async () => {
    try {
        // CREATE

        // const newHabit = await db.Habit.create({
        //     habit: "Ride your bike",
        //     description: "Ride you bike instead of driving your car",
        //     purpose:"reduces emissions",
        //     impact:"reduces emissions",
        //     timeSpent:20,
        //     imgURL:'https://www.cordiscosaile.com/wp-content/uploads/2016/11/Bicyclist-hand-signal-1024x683.png'

        // })
        // console.log(newHabit)

        // READ
        // const foundBlog = await db.Habit.findOne({
        //     habit: "Ride your bike"
        // })
        //console.log(foundBlog)

        // UPDATE
        const updatedHabit = await db.Habit.findOneAndUpdate(
            {habit: "Ride your bike"},
            { timeSpent: 15},
            { new: true , upsert: true }
        )
            console.log(updatedHabit)

    } catch (err) {
        console.log(err);
    }
}
habitCrud()