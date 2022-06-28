const express = require ("express");
const app = express();

app.get ("/students", (request, response) =>{
    response.status ().json({
        status: "fail",
        data: {
            message: "undefined routes"
        }
    })
})

const port = 3000;

app.listen (port, () =>{
    console.log (`Server started on port ${port}...`);
});
