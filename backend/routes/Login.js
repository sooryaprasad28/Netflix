const router = require("express").Router();
const User = require("../models/UserModel");


router.post('/',async (req,res) =>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.json({success:false,error:"All fields are required"});

        }
        const user = await User.find({email:email,password:password}).exec();
        if(!user){
            return res.json({success:false,error:"User not found"});
        }
        return res.json({success:true,user:user,message:"Login successfull"});
    }
    catch(error){
        return res.status(400).json({success:false,error:"Internal server error"});
    }
})

module.exports = router;