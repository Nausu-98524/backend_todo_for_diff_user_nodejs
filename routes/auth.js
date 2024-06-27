const router = require('express').Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs")


//Sign Up
router.post("/register", async(req, res)=>{
    try {
        const {email, username, password} = req.body;
        const hashPassword = bcrypt.hashSync(password);
        const user = new User({email, username, password:hashPassword});
        await user.save().then(()=> 
            res.status(200).json({ user : user})
    )
    } catch (error) {
        res.status(400).json({ message : "User Already Exists"})
    }
})


//Sign In
router.post("/login", async(req, res)=>{
    try {
        const user = await User.findOne({email : req.body.email});

        if(!user) {
            res.status(400).json({message : "Please Sign Up First"})
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordCorrect){
            res.status(400).json({message : "Password is not correct"})
        }
        const {password, ...others} = user._doc;
        res.status(200).json({others});
    } catch (error) {
        res.status(400).json({ message : "User Already Exists"});
    }
})





module.exports = router;