const express = require ("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx",require("express-react-views").createEngine());

app.get ("/", (req, res) =>{
    res.send ("hello!");
    })

module.exports = app;

//model:

/*
pic: 
first name: 
last name:
email: 
studentID: 
*/
