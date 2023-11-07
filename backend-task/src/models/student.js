const mongoose = require('mongoose')

const student_schema = mongoose.Schema({
    name:{
        type:String
    },
    course:{
        type:String
    }
})  

module.exports = mongoose.model("student", student_schema)