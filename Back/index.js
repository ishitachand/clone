import express from 'express'
import cors from 'cors'
import  Collection  from './config/Collection.js';
var app = express();
app.use(express.json())
app.use(cors())
app.get('/login',cors(),(req, res)=> {
   res.send('Hello World');
})
app.post("/login",cors(),async(req,res)=>{
  const {email,password}=req.body
  try{
const check=await Collection.findOne({email:email})
if(check){
  res.json("exist")
}
else{
  res.json("not exist")
}
  }
  catch(e){
console.log(e)
  }
})

app.get('/register',cors(),(req, res)=> {
  res.send('Hello World');
})
app.post('/register',cors(),async(req,res)=>{
 const {email,password}=req.body
 const data={
  email:email,
  password:password
 }
 try{
const check=await Collection.findOne({email:email})
if(check){
 res.json("exist")
}
else{
 res.json("not exist")
 await Collection.insertMany([data])
}
 }
 catch(e){
console.log(e)
 }
})
var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})