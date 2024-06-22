const router = require("express").Router();
const User = require("../models/UserModel");
router.post('/',async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({msg:"Please enter all fields"})
        }
        await User.create({email:email,password:password,likedMovies:[]});
        const user =await User.findOne({email:email}).exec();
        console.log(user);
        return res.json({success:true, user:user, message:"Registration succesfull"});
    }
    catch(error){
        return res.json({error:error,success:false,message:"register unsuccessfull"});
    }
})
module.exports = router;