const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 5000;

moo

app.get("/", (req, res) => {
    res.send("Hello World!!!!")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})