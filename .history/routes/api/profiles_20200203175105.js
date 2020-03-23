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
    new Profile(profilesFields).save()
        .then(profile => {
            res.json(profile)
        })
})

// 下拉刷新
router.get("/latest", passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.find()
        .sort({ date: -1 })
        .then(profiles => {
            if (!profiles) {
                res.status(404).json("没有任何消息")
            } else {
                let newProfiles = [];
                for (let i = 0; i < 3; i++){
                    if (profiles[i] != null) {
                        newProfiles.push(profiles[i])
                    }
                }
                res.json(newProfiles)
            }
        })
})

// 上拉加载
router.get("/:page/:size",passport.authenticate('jwt',{se}))








module.exports = router;