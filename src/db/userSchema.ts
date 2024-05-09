import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    
    name:String,
    contactno:String,
    email:String,
    todos:[
      {
          type:mongoose.Schema.Types.ObjectId,
          //Ref to which table
          ref:"Todo",
      }]
    

})
const usermodyal =
  mongoose.models.User || mongoose.model("User", userSchema);

export default usermodyal;