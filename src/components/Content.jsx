import React from 'react'
import './style.css'
import Carousel from './Carousel'
import BtnGroup from './BtnGroup'
export default function content() {
  return (
    <>
    
    <div className="text">    
      <h1><b>
        Find your dream job now</b>
      </h1>
      <p id="pc">
        5 lakh+ jobs for you to explore
      </p>
    </div>
    <div className="searchbar">
      <img src="https://cdn-icons-png.flaticon.com/512/3771/3771554.png" alt=""/>
      <input className="i" type="text" placeholder="enter skills/designation"/>
      <input className="i" type="text" placeholder="enter skills/designation"/>
      <button type="button" className="btn btn-primary i" placeholder="Search">
        Submit
      </button>
    </div>
    <div className="d-flex pic-container mx-auto flex-row mb-3">
  <div className="p-4">
    <img src="https://static.naukimg.com/s/0/0/i/collatedOffering/desktop/hp-touchpoint.png" alt="" />
  </div>
  <div className="p-4 mt-3"><h5 >Introducing Naukri 360</h5>
  <p >Discover powerful tools & tips that help you <br/>prepare for every stage of your career</p></div>
  <div className="p-5 m-5 ">
    <button type="button" style={{width:'max-content'}} className="btn btn-primary btn-lg">Start exploring</button>
  </div>
</div>
<BtnGroup/>
<Carousel/>
  </>
  )
}
