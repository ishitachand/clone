import {React ,useState}from 'react'
import logo from './pic/logo.jpeg'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const history=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
async function submit(e){
  e.preventDefault()
  try{
await axios.post('http://127.0.0.1:5000/login',{
  email,password
}).then((res)=>{
  if(res.data="exist"){
    history('/home',{state:{id:email}})
  }
  else if(res.data="not exist"){
    alert('user have not signed up')
  }
})
.catch((e)=>{
  alert('wrong details')
  console.log(e)
})
}
  catch(e){
console.log(e)
  }
}
  return (
  <>
   <div className='navbar navbar-expand-lg bg-body-tertiary sticky-top'>
  <Link className="navbar-brand " to="/">
    <img src={logo} width="40" height="34" className="d-inline-block align-text-top me-3" />
    naukri
   </Link>
  </div>
  <h1 className='my-2 mx-2'>Welcome Back</h1>
  
  <form method="POST" className='mx-auto'>
  <div className="container border border-1 my-5">
  <label htmlFor="fname">Email/Username</label><br/>
  <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter email/username' id="fname" name="fname"/><br/>
  <label htmlFor="fname">Password</label><br/>
  <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" name="psw" required/>
  <button type="submit" onClick={submit} className="btn btn-success">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
    </div>
    </form>
   
    <div className="container" style={{background:'color:#f1f1f1'}}>
    <button type="button"className="btn btn-danger cancel-btn" >Cancel</button>
    <span className="psw ">Forgot <a href="#">password?</a></span>
    </div>
  </>
  )
}
