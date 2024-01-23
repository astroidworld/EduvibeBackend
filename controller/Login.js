// Import any required modules or dependencies
const express = require('express');
const bcrypt = require('bcrypt');
// Import the required schemas
const StudentSchema = require('../models/StudentSchema.js');
const TeacherSchema = require('../models/TeacherSchema.js');

// Define your login controller function
const loginController = async (req, res) => {
    // Get the user input from the request body
    const { email, password, type } = req.body;

    try {
        let user;
        if (type === "student") {
            user = await StudentSchema.findOne({ email });
        } else if (type === "teacher") {
            user = await TeacherSchema.findOne({ email });
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        sendUser = {
            userID:user._id,
            firstName: user.firstName,
            lastName: user.firstName,
            userName: user.userName ,
            email: user.email,
            phoneNumber: user.phoneNumber,           
            type: user.type,
            CreatedCourses: user.CreatedCourses,
            createdAt: "2024-01-22T14:27:49.382Z",
            updatedAt: "2024-01-22T14:27:49.382Z"
        }

        // Login successful
        res.status(200).json({ message: "Login successful",user:sendUser });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err });
    }
};

// Export the login controller function
module.exports = loginController;
