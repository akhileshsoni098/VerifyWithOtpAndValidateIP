const mongoose = require("mongoose")

const RegisterSchema = new mongoose.Schema({
   
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
    }


})


module.exports = mongoose.model("register", RegisterSchema)