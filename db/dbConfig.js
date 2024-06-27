const mongoose = require('mongoose')

const connectToDB = async(req, res)=>{
    try {
        await mongoose.connect("mongodb+srv://mern_todo_diff_user:mern_todo_diff_user123@cluster0.j7oj87s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>{
            console.log('connect to DB')
        })
    } catch (error) {
        res.status(400).json({message : 'DB not connected'})
    }
   
}


module.exports = connectToDB;