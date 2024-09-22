const router=require('express').Router();
const User=require('../Models/User');
const UserAuth=require('../Models/UserAuth');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secretKey="12345";
router.post('/createresume',async(req,res)=>{
    const userresume=new User(req.body);
    try{
        const savedResume=await userresume.save();
        console.log(savedResume);
        res.status(200).json(savedResume);
    }
    catch(err){
        console.log(`Error in creating resume:`,err);
        res.status(500).json({ error: 'There was a server error.' });
    }
});
router.post('/register',async (req,res)=>{
    const user=new UserAuth(req.body);
    try{
        const saveuser=await user.save();
        console.log(saveuser);
        res.status(200).json(saveuser);
    }
    catch(err){
        console.log(`Error in registration of user`);
        res.status(500).json({error:'There is server error'})
    }
});
router.post('/checkUser',async (req,res)=>{
    const {email,password}=req.body;
    const user=await UserAuth.findOne({email});
    if(!user){
        return res.status(400).json({message:`User exists does not exists`});
    }
    try{
        const checkuservalid=await bcrypt.compare(password,user.password);
        if(!checkuservalid){
            return res.status(400).json({message:`Invalid Password`});
        }
        const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY);
        return res.status(200).json({ accessToken: accessToken });
    }
    catch(err){
        console.log(`Error in validation of user`);
        res.status(500).json({error:'There is server error'})
    }
});

router.get('/')

module.exports=router;

 