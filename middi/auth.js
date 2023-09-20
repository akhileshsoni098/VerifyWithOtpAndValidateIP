const  User = require("../models/userModel");
const jwt = require("jsonwebtoken")
// const AdminModel = require("../model/adminModel");

//==================== authentication ===============================


exports.authentication = function (req, res, next){
try{
    let token = req.headers["x-auth-token"]

if(!token) {return res.status(400).send({status:false , message:" TOKEN REQUIRED"})}

jwt.verify(token , process.env.JWT_SECRET_KEY, async function(err, decoded){

    if(err) {
    return res.status(401).send({status:false , message: err.message})
    }

else {
    req.user = decoded
    
    next()
}

})
}catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to json OTP" });
  }
}





