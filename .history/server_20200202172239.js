const express = require("express")
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURL
const app = express()
const port = process.env.PORT || 5000;

// 引入users.js
const users = require("./routes/api/")

mongoose.connect(db,{ useUnifiedTopology: true,useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB is connected")
    })
    .catch(err => {
        console.log(err)
    })

app.get("/", (req, res) => {
    res.send("Hello World!!!!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})