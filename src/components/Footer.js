import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="footer ">
      <div className="footer-left">
        <span>© 2023 <a href="#">INSPACE <i> atelier </i></a></span>
        <span className="social-icon">
          <a href="#" target="_blank">
            <img src="/assets/images/facebook.svg" alt=""/>
          </a>
          
          <a href="#" target="_blank">
            <img src="/assets/images/instagram.svg" alt=""/>
          </a>
          
        </span>
        <span><a href="#">Search</a></span>

        

      </div>
      <div className="footer-right">

      <span>
          <p>Developed By <a target="_blank" href="https://www.sawebsoft.com">SA WebSoft</a> </p>
      </span> &nbsp; &nbsp; 

        <span>
          <p>| &nbsp; House# 14/B, Rashid Nibash, Third Floor, Road 68, Gulshan 02, Dhaka 1212</p>
        </span>
      </div>
    </footer>
    </>
  )
}
