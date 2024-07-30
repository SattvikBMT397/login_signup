// const jwt = require("jsonwebtoken");

// const authMiddleware = (req,res,next)=>{
//     const token =req.header("Authorization");
//     if(!token) return res.status(401).send("Access Denied: No Token Provided!");
//     try{
//         const decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.user = decode;
//         next();
//     }
//     catch(err){
//         res.status(400).send('Invalid Token');
//     }
// }
    