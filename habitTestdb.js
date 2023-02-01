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
// habitCrud()

export default function HabitsForm(props) {
    
    return (
        <div className="form-floating mx-auto w-75 mb-3 mt-4">
            {/* form to create a new habit */}
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="habit">Habit name:</label>
                    <input  
                        className="form-control text-center mb-3"
                        type='text'
                        id='habit'
                        placeholder="name your habit here"
                        value={props.form.habit}
                        onChange={e => props.setForm({ ...props.form, habit: e.target.value })}
                        />
                    <label htmlFor="description">Description</label>
                    <input  
                        className="form-control text-center mb-3"
                        type='text'
                        id='description'
                        placeholder="describe your habit here"
                        value={props.form.description}
                        onChange={e => props.setForm({ ...props.form, description: e.target.value })}
                        />
                    <label htmlFor="imgURL">Picture URL:</label>
                    <input  
                        className="form-control text-center"
                        type='text'
                        id='imgURL'
                        placeholder="add an image URL"
                        value={props.form.imgURL}
                        onChange={e => props.setForm({ ...props.form, imgURL: e.target.value })}
                        />
                </div>
                <button className="btn btn-primary mt-3" type='submit'>Submit</button>
            </form>
        </div>
    )
}