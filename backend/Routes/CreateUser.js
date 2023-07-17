const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post("/createUser", async (req, res)=> {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email:req.body.email,
            location: req.body.location,
            password: req.body.password
        });
        res.json({data: newUser, success: true});
    } catch(err) {
        console.log(err);
        res.json({success: false});
    }
});

module.exports = router;