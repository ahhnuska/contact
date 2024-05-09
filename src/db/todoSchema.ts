import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    
    todo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
})
const todomodel =
  mongoose.models.Todo || mongoose.model("Todo", userSchema);

export default todomodel;