const Course = require('../models/CourseSchema.js');

const GetCourseByIdController = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        res.status(200).json({ course: course, success: true, message: 'Course found'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = GetCourseByIdController;
