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

// 使用routes
app.use("/api/use")
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})