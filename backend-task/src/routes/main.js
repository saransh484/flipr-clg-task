const express = require('express')
const { student_enrolled, save_student, save_course, save_enrolled, course_det } = require('../controllers/main_controller')
const router = express.Router()

router.post('/save_stu', save_student)
router.post('/save_course', save_course)
router.post('/save_enrolled', save_enrolled)
router.get('/enrolled_student', student_enrolled)  
router.get('/course_det', course_det) 

module.exports = router