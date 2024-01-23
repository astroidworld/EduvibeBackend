// Import the Course model
const Course = require('../models/CourseSchema.js');

// Controller function to get all courses
const GetCoursesController = async (req, res) => {
    try {
        // Fetch all courses from the database
        const courses = await Course.find();

        // Send the courses as a response
        res.status(200).json(courses);
    } catch (error) {
        // Handle any errors that occur
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Export the controller function
module.exports = GetCoursesController;
