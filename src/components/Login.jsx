import React from 'react'
import logo from './pic/logo.jpeg'
import {Link} from 'react-router-dom'
export default function Login() {
  return (
  <>
   <div className='navbar navbar-expand-lg bg-body-tertiary sticky-top'>
  <Link className="navbar-brand " to="/">
    <img src={logo} width="40" height="34" className="d-inline-block align-text-top me-3" />
    naukri
   </Link>
  </div>
  <h1 className='my-2 mx-2'>Welcome Back</h1>
  
  <form action="" className='mx-auto'>
  <div className="container border border-1 my-5">
  <label for="fname">Email/Username</label><br/>
  <input type="text" placeholder='enter email/username' id="fname" name="fname"/><br/>
  <label for="fname">Password</label><br/>
  <input type="password" placeholder="Enter Password" name="psw" required/>
  <button type="submit" className="btn btn-success">Login</button>
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
