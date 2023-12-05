import React from 'react'
import img from './images/SKCET-Coimbatore11.jpg'
import { useNavigate } from 'react-router-dom'

const Den = () => {
  const Navigate=useNavigate();
  const handleLayout=()=>{
     Navigate("/layout")    
  } 
  const handleBlog=()=>{
     Navigate("/blog")
  }
  const handleContact=()=>{
     Navigate("/contact")
  }
  return (
    <>
    <div>
    <h1>*Yakshini Varsha*</h1>
    <p>SRI KRISHNA COLLEGE OF ENGINEERING & TECHNOLOGY</p>
    <p>-----B.E CSE(CYBERSECURITY)</p>
    <img src={img} alt='error'></img>
    <button onClick={handleLayout}>Layout</button>
    <button onClick={handleBlog}>Blog</button>
    <button onClick={handleContact}>Contact</button>
    <br></br>
   
    <a href="https://www.skcet.ac.in" target="blank">learn here..</a>
    <ol>
        <li>MECHANICAL</li>
        <li>MECHATRONICS</li>
        <li>IT</li>
        <li>AIDS</li>
        <li>CSY/CSD</li>
    </ol>
    <ul>
        <li>MECHANICAL</li>
        <li>MECHATRONICS</li>
        <li>IT</li>
        <li>AIDS</li>
        <li>CSY/CSD</li>
    </ul>
    <dl>
        <dt>@CSY</dt>
        <dd>NEW BATCH! Admissions open...</dd>
    </dl>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_7itWsjIPc0?si=8YdrOqGKPDhEbBdK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    </>
  )
}

export default Den