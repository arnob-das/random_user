const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleWare/errorHandler');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const ramdomUserRoute = require("./routes/v1/ramdomUser.route");
const allRamdomUserRoute = require("./routes/v1/allRandomUser.route");
const saveRandomUserRoute = require("./routes/v1/saveRandomUser.route");
const updateSpecificUserRoute = require("./routes/v1/updateSpecificUser.route");
const deleteSpecificUserRoute = require("./routes/v1/deleteSpecificUser.route");

// send data for a random user
app.use("/api/v1/user/random", ramdomUserRoute);

// send data for all random users
app.use("/api/v1/user/all", allRamdomUserRoute);

// save data for an random user
app.use("/api/v1/user/save", saveRandomUserRoute);

// update specific user
app.use("/api/v1/user/update", updateSpecificUserRoute);

// delete specific user through id
app.use("/api/v1/user/delete", deleteSpecificUserRoute);


app.get("/", (req, res) => {
    res.send("express working perfectly")
});

app.all("*", (req, res) => {
    res.send("No route found!");
    res.end();
})

// global error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


// error handler 
// if express can not handle the error by itself
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
})