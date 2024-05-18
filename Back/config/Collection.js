import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/Users')
.then(()=>{
  console.log("connected successfully")
})
.catch((e)=>{
  console.log("failed")
})
const newSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})
const Collection=mongoose.model("Collection",newSchema)
// module.exports=Collection
export default Collection;