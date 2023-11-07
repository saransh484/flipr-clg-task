const mongoose = require('mongoose')

const enrolled_schema = mongoose.Schema({
    student_enrolled:[],
    course_name:{
        type:String
    }
})

module.exports = mongoose.model("enrolled", enrolled_schema)