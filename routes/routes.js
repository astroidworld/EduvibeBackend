const express = require("express");
const router = express.Router();

// Load all controllers
const SignupController = require("../controller/Signup.js");    
const LoginController = require("../controller/Login.js");    
const CreateCourseController = require("../controller/CreateCourse.js");   
const GetCoursesController = require("../controller/GetCourses.js");
const GetCourseByIdController = require("../controller/GetCourseById.js");

// Define all routes
router.post("/signup", SignupController);
router.post("/login", LoginController);
router.post("/createCourse", CreateCourseController);
router.get("/getCourses", GetCoursesController);
router.get("/getCourseById/:id", GetCourseByIdController);


module.exports = router 