const express = require("express")
const router = express.Router()

router.get("/test", (req, res) => {
    res.json({msg:"login works"})
})

// 注册 register











module.exports = router;