//import our express application
const app = require ("./App")

//import mongoose inorder to connect to our database
const mongoose = require("mongoose");

//import dotenv inorder to connect to our database
const dotenv = require("dotenv");

//use dotenv to connect to our config files
dotenv.config({
    path: "./config.env"
});

const students = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD))
.then(() => {
    console.log("Database is running")
})

//running port
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on PORT ${port}`)
})