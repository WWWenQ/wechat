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
                return res.status(400).json({email:"邮箱已"})
            }
        })
})










module.exports = router;