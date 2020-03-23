const express = require("express")
const router = express.Router()
const User = require("../../models/User")
const bcrypt = require("bcryptjs")
const gravatar = require('gravatar');

router.get("/test", (req, res) => {
    res.json({msg:"login works"})
})

// 注册 register
router.post("/register", (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({email:"邮箱已被注册！"})
            } else {
                const url = gravatar.url('emerleite@gmail.com', {s: '200', r: 'pg', d: '404'});
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password:req.body.password
                })
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash)=> {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err))
                    });
                });
            }

        })
})










module.exports = router;