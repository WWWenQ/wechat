const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://WenQ:<password>@cluster0-a32dl.mongodb.net/test?retryWrites=true&w=majority")
    .then(() => {
            console.log("Mon")
        })

app.get("/", (req, res) => {
    res.send("Hello World!!!!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})