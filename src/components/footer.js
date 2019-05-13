import React from "react"
import Fade from "react-reveal/Fade"

const Footer = () => {
  return (
    <footer className="">
      <Fade delay={500}>

        <div>
            <div className="footer_link">
              <span><a href="https://www.robhenderson.dev/"> @2019 Robert Henderson </a></span>
            </div>
            <div className="footer_nav">
                <span> <a href="https://twitter.com/KickItAndCode" className="header_link"> Twitter</a> </span>
                <span> <a href="https://www.linkedin.com/in/robhenderson3/" className="header_link"> LinkedIn</a> </span>
                <span> <a href="https://www.instagram.com/bobby_rae/" className="header_link"> Instagram</a> </span>
                <span> <a href="https://medium.com/@kickitandcode" className="header_link" href="https://medium.com/@kickitandcode"> Blog </a> </span>
              
              </div>
        </div>
      </Fade>
    </footer>
  )
}

export default Footer
