import React from 'react'
import logo from './pic/logo.jpeg'
import {Link} from 'react-router-dom'
export default function Register() {
  return (
    <>
    <div className='navbar navbar-expand-lg bg-body-tertiary sticky-top d-flex justify-content-between'>
    <div className="p-2"> <Link className="navbar-brand " to="/">
    <img src={logo} width="40" height="34" className="d-inline-block align-text-top me-3" />
    naukri
   </Link></div>
  <div className=" p-3"><h6>Already Registerd? <Link className="navbar-brand text-primary" to="/login">    
    Login
    </Link>here</h6></div>   
  </div>
    <form action="/action_page.php" className="border mx-5 my-1" >
  <div className="container p-2">
    <h3 className='text-start fw-b text-primary'>Create your Naukri profile</h3>
    <p className='text-primary-emphasis'>Search & apply to jobs from India's No.1 Job Site</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text"className='form-control' placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" className='form-control' placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" className='form-control' placeholder="Repeat Password" name="psw-repeat" required/>
    
    <label>
    <input className="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input"/>Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p>

    <div className="clearfix d-flex flex-row">
      <button type="button" className="cancelbtn btn btn-danger">Cancel</button>
      <button type="submit" className="signupbtn btn btn-success">Sign Up</button>
    </div>
  </div>
</form>
</>
  )
}
