const Course = require('../models/courses')
const Enrolled = require('../models/enrolled')
const Student = require('../models/student')


exports.save_student = async (req, res) =>{
    const {name, course} = req.body

    try {
        
        const mdl = await Student.create({
            name,
            course
        })
        res.send("success")
    } catch (error) {
        res.send(error)
    }

}

exports.save_course = async (req, res) =>{
    const {price, course_name} = req.body

    try {
        const mdl = await Course.create({
            course_name,
            price
        })
        res.send("success")
    } catch (error) {
        res.send(error)
    }

}

exports.save_enrolled = async (req, res) =>{
    const {student_enrolled, course_name} = req.body

    try {
        const mdl = await Enrolled.create({
            course_name,
            student_enrolled
        })
        res.send("success")
    } catch (error) {
        res.send(error)
    }

}

exports.student_enrolled = async (req, res)=>{

    const {targetCourseName} = req.body

    Course.findOne({ course_name: targetCourseName })
  .then(course => {
    console.log("Course found:", course); // Add this line for debugging
    if (course) {
      return Student.find({ course: course.course_name });
    } else {
      console.log("Course not found"); // Add this line for debugging
      throw new Error('Course not found');
    }
  })
  .then(students => {
    res.send(students)
    console.log("Students enrolled in the specific course:", students); // Add this line for debugging
  })
  .catch(err => {
    console.error(err);
  });
}  

exports.course_det = async(req, res) =>{
    const {stud_name} = req.body

    Student.findOne({ name: stud_name })
    .then(course => {
      console.log("Course found:", course); // Add this line for debugging
      if (course) {
        return Course.find({ course_name: course.course });
      } else {
        console.log("Course not found"); // Add this line for debugging
        throw new Error('Course not found');
      }
    })
    .then(course => {
      res.send(course)
      console.log("Students enrolled in the specific course:", students); // Add this line for debugging
    })
    .catch(err => {
      console.error(err);
    });
}