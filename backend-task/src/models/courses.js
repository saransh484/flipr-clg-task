const mongoose = require('mongoose')

const course_schema = mongoose.Schema({
    course_name:{
        type:String
    },
    price:{
        type:Number
    }
})

module.exports = mongoose.model("course", course_schema)