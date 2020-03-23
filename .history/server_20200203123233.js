const express = require("express")
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURL
const app = express()
const bodyParser = require("body-parser")
const passport = require("passport")


// 引入users.js
const users = require("./routes/api/users")
const profiles = require("./routes/api/profiles")

// 使用body-parder中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// passport初始化
app.use(passport.initialize());
require("./config/passport")(passport)

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
app.use("/api/users",users)
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})