import React from 'react'
import './Contact.css'
import Info from './Info'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Contact() {
  return (
    <div id="contact">
      <div id="left">
      <h1>GET IN TOUCH WITH US</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco.
      </p>
         <div>
          <Info pic ={<HomeOutlinedIcon/>} title={"Our Location"} para={"99 S.t Jomblo Park Pekanbaru 28292. Indonesia"}/>
          <Info pic ={<CallEndOutlinedIcon/>} title={"Phone Number"} para={"(+62)81 414 257 9980"}/>
          <Info pic ={<EmailOutlinedIcon/>} title={"Email Address"} para={"info@yourdomain.com"}/>
         </div>
      </div>
      <div id="right">
         <input type="text" placeholder ="Your Name"></input>
         <input type="text" placeholder ="Your Email"></input>
         <input type="text" placeholder ="Your Phone"></input>
         <textarea placeholder ="Your Message"></textarea>

      </div>
    </div>
  )
}

export default Contact