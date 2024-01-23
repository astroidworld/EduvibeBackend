const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            maxLength:50,
        },
        lastName: {
            type:String,
            required:true,
            maxLength:50,
        },
        userName: {
            type:String,
            required:true,
            maxLength:50,
            unique : true
        },
        email: {
            type:String,
            required:true,
            maxLength:50,
            unique : true
        },
        phoneNumber: {
            type:String,
            required:true,
            maxLength:50,
            unique : true
        },
        password: {
            type:String,
            required:true                        
        },
        type: {
            type:String,
            required:true,
            maxLength:50,            
        },
        Bio: {
            type:String        
        },
        CreatedCourses:{
            type:Array,
            default:[]
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

module.exports = mongoose.model("TeacherSchema", TeacherSchema);