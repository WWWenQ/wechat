const express = require("express")
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURL
const app = express()


// 引入users.js
const users = require("./routes/api/users")

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