const express = require("express")
const router = express.Router()
const User = require("../../models/User")

router.get("/test", (req, res) => {
    res.json({msg:"login works"})
})

// 注册 register
router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                
            }
        })
})










module.exports = router;