const express = require("express")
const router = express.Router()
const Profile = require("../../models/Profile")
const passport = require("passport")

router.get("/test", (req, res) => {
    res.json({msg:"profile works"})
})

// 创建朋友圈信息接口
router.post("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profilesFields = {};
    if (req.body.img) profilesFields.img = req.body.img;
    if (req.body.name) profilesFields.name = req.body.name;
    if (req.body.text) profilesFields.text = req.body.text;

    if (req.body.imgs) {
        profilesFields.imgs = req.body.imgs.split("|")
    }
    
})








module.exports = router;