import React from "react";
import "./style.css";
import logo from'./pic/logo.jpeg'
export default function Footer() {
  return (
    <>
  <div className="container ">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-left-center mb-3 link-body-emphasis text-decoration-none">
        < img src={logo} className="bi me-2" width="40" height="32"/>
      </a>
      {/* <p className="text-body-secondary">&copy; 2024</p> */}
      <div className="d-flex flex-row mb-3">
  <div className="p-2"><a className="text-body-secondary" href="#">
        <img src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg" width="24" height="24"alt="" /></a></div>
  <div className="p-2"><a className="text-body-secondary" href="#">
        <img src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg" width="24" height="24" alt="" /></a></div>
  <div className="p-2"><a className="text-body-secondary" href="#">
        <img src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg" width="24" height="24" alt="" /></a></div>
  <div className="p-2"><a className="text-body-secondary" href="#">
        <img src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg" width="24" height="24" alt="" /></a></div>
</div>
    
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About us</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help center</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Summon/Notices</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Grievances</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Report issues</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Fraud Alert</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms and Conditions</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Trust and Safety</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Credits</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Sitemap</a></li>
      </ul>
    </div>
  </footer>
</div>

    </>
  );
}
