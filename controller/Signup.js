// Import any required modules or dependencies
// For example, if you're using Express.js:
const express = require('express');
const bcrypt = require('bcrypt');
// Import the required schemas
const StudentSchema = require('../models/StudentSchema.js');
const TeacherSchema = require('../models/TeacherSchema.js');


// Define your signup controller function
const signupController = async(req, res) => {
    // Get the user input from the request body
    const { userName, email, password, firstName, lastName, phoneNumber, type } = req.body;
    

    // Create a new user object with the input data
    const newUser = {
        firstName, 
        lastName, 
        userName,
        phoneNumber, 
        email,
        password,
        type
    };

    // Perform any necessary validation on the input
    if(type === "student"){
        //call student Signup function
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            newUser.password = hashedPassword;
            const response = await StudentSchema.create(newUser)
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Account Created Successfully'
                }
            );
          } catch (err) {
            res.status(500).json({ message: "Signup failed", error: err });
          }

    }else if(type === "teacher"){        
        //call teacher Signup function

            try {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                newUser.password = hashedPassword;
                const response = await TeacherSchema.create(newUser);
                res.status(200).json(
                    {
                        success:true,
                        data:response,
                        message:'Account Created Successfully'
                    }
                );
                } catch (err) {
                res.status(500).json({ message: "Signup failed", error: err });
                } 
    }






};

// Export the signup controller function
module.exports = signupController;
