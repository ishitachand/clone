import React from 'react'
import logo from './pic/logo.jpeg'
import { useNavigate } from 'react-router-dom'
import {Link,NavLink,useLocation} from 'react-router-dom'
  export default function Navbar() {
    const Navigate=useNavigate()
    const location = useLocation();
   const LoginHandler=()=>{
    Navigate("/login")
   }
   const RegisterHandler=()=>{
      Navigate("/register")
   }
   let custombtn
   
     if (location.pathname==="/"){
       custombtn=(
         <>
   <button type="button" className=" btn btn-outline-success btn-lg me-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={LoginHandler}>Login</button>
<button type="button" className="btn btn-secondary btn-lg btn-danger" onClick={RegisterHandler}>Register</button>
</>
       )
}
else if(location.pathname==='/home'){
 <button type="button" className=" btn btn-outline-success btn-lg me-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={LoginHandler}>Log out</button>
}
  return (
    <>
   
    <nav className="navbar navbar-expand-lg  sticky-top ">
  <div className="container-fluid ">
    <Link className="navbar-brand " to="#">
    <img src={logo} width="40" height="34" className="d-inline-block align-text-top me-3" />
    naukri
   </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <NavLink className="nav-link active" to="#" activeclassname="text-success">Jobs</NavLink>
          {/* <NavLink className={({isActive})=>`nav-link active ${isActive?"text-success":"text-black"}`} aria-current="page" to="#">Jobs</NavLink> */}
        </li>
        <li className="nav-item me-4">
        <NavLink className="nav-link active" to="#" activeclassname="text-success">Companies</NavLink>
          {/* <NavLink className={({isActive})=>`nav-link  ${isActive?"text-success":"text-black"}`} to="#">Companies</NavLink> */}
        </li>
        <li className="nav-item me-4">
        <NavLink className="nav-link active" to="#" activeclassname="text-success">Services</NavLink>
          {/* <NavLink className={({isActive})=>`nav-link  ${isActive?"text-success":"text-black"}`} to="#">Services</NavLink> */}
        </li>
      </ul>
      <form className="d-flex" role="search">
     {custombtn}
     </form>
    </div>
  </div>
</nav>
    </>
  )
}
