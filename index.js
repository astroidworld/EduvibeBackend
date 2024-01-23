const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());


// connection with the database
const dbConnect = require("./config/Database.js");
dbConnect();

// starting the server 
app.listen(PORT,()=>{
    console.log(`\nServer is Listening in port no ${PORT}...`)
})

// mounting the routes

const routes = require("./routes/routes.js");

app.use("/api/v1",routes);


app.get("/",(req,res)=>{
    res.send("<h1>Woriking Fine...</h1>")
})