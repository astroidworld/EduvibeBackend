const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
    {
        CourseName:{
            type:String,
            required:true,
            maxLength:50,
        },
        CourseDescription: {
            type:String,
            required:true
        },
        CourseCreator: {
            type:String,
            required:true,
        },
        CourseStudent: {
            type:Array,
            default:[]
        },
        CourseRating: {
            type:Number,
            default:0,
            min:0,
            max:5
        },
        Category: {
            type:String,
            required:true,
            maxLength:100,            
        },
        CoursePrice: {
            type:Number,
            required:true,           
        },
        Thumbnail: {
            type:String            
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("CourseSchema", CourseSchema);