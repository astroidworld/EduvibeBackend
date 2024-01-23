const express = require('express');

//courseSchema import
const CourseSchema = require('../models/CourseSchema.js');
const TeacherSchema = require('../models/TeacherSchema.js');

const createCourseController = async(req, res) => {
    // Get the user input from the request body
    const { CourseName, CoursePrice, CourseDescription, CourseCreator, Category } = req.body;
    
    const email = CourseCreator;
    // Create a new user object with the input data
    const newCourse = {
        CourseName, 
        CourseDescription,
        CourseCreator,
        CoursePrice,
        Category
    };

    // Perform any necessary validation on the input
    try {
        const response = await CourseSchema.create(newCourse);
        const teacher = await TeacherSchema.findOne({ email });
        teacher.CreatedCourses.push(response._id);
        await teacher.save();
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Course Created Successfully'
            }
        );
        } catch (err) {
            res.status(500).json({ message: "Course Creation failed", error: err });
        }
}

module.exports = createCourseController;