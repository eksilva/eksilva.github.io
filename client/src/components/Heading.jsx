import React from 'react';

// Components
import { GiAnchor } from 'react-icons/gi';
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from "react-icons/si";



const Heading = () => {
  return (
    <div id="heading-wrapper">
        <GiAnchor id="heading-icon" />
        <div id="heading-right">
          <GoMarkGithub className="header-link-icons" />
          <SiLinkedin className="header-link-icons" />
          <button className="hollow-button" id="resume-button">Resume</button> 
        </div>
    </div>
  )
}

export default Heading;
