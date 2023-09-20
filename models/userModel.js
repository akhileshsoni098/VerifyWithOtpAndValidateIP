const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//============================================== genrate token ===================================================
module.exports = mongoose.model("User", userSchema);
