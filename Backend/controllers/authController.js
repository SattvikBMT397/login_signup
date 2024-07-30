const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const sendMail = require('../services/sendEmail');
const  generateOtp  = require('../services/generateOtp');
const {sendSuccess,sendError}= require('../utils/status')
const { registerSchema, loginSchema } = require('../Validation/authValidation');
exports.register = async(req, res) => {

    const { username, email, password } = req.body;
    try{
        registerSchema.parse(req.body);
        const existingUser= await User.findOne({where:{email}});
        console.log()
        if(existingUser) return sendError(res,"User Already Exist");
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return sendError(res, 'Error hashing password');
            const newUser = {
                username,
                email,
                password: hashedPassword
            };

            User.create(newUser, (err, result) => {
                if (err) return sendError(result,'Error registering user');    
                sendSuccess(res, 'User registered SuccessFully');
                
            });
        })
    }
    catch(err){
       return sendError(res,'Server Error');
    }
    // console.log("Request Body:", req.body); 
};

exports.loginWithPassword = async(req, res) => {
    const { email, password } = req.body;
    try{
        loginSchema.parse(req.body);
         const user = await User.findOne({where:{email}});
        if (!user) return sendError(res, 'User not found');
        bcrypt.compare(password, user[0].password, (err, isMatch) => {
            if (err) return sendError(res,'Error comparing passwords');
            if (!isMatch) return sendError('Invalid credentials');
      const token = jwt.sign({id:user[0].id},process.env.JWT_SECRET,{expiresIn:'1h'});
      return sendSuccess(res,"Login SuccessFully",{token});
        })
    }
    catch(err){
       return sendError(res,err.message);
    }
};

exports.sendOtp= async(req,res)=>{
       const{email}=req.body;  
       try{
       const user= findOne({email});
       if(!user) return sendError(res,'User not Found');
       const otp = generateOtp;
       user.otp = otp;
       await user.save();
       await sendMail(email, 'Your OTP code', `Your OTP code is ${otp}`, `<b>Your OTP code is ${otp}</b>`);
       sendSuccess(res, 'OTP sent to email');}
       catch (err) {
        sendError(res, err.message || 'Server error');}
}

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ where: { email, otp } });
        if (!user) return sendError(res, 'Incorrect OTP');
        user.otp = null;
        await user.save();
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        sendSuccess(res, 'OTP verified', { token });
    } catch (err) {
        sendError(res, err.message || 'Server error');
    }
}