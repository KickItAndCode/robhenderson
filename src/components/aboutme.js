import React from "react"
import Image from "../components/image"
import { Button } from "@material-ui/core";

const AboutMe = () => {
  return (
    <div className="aboutme_container aboutme_image"> 
      <p className="aboutme_header_large">About Me</p>
    
        {/* <Image /> */}
            <div className="aboutme_header"> Full-Stack Developer (React JS | Python)</div>
            <Button variant="contained" color="primary" className="aboutme_button">
        Learn More
      </Button>
   
    </div>
  )
}

export default AboutMe
