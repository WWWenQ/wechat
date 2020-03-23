const express = require("express")
const router = express.Router()
const Profile = require("../../models/Profile")
const passport = require("passport")

router.get("/test", (req, res) => {
    res.json({msg:"profile works"})
})

// 








module.exports = router;