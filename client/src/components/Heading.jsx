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
        <a href="https://github.com/eksilva" target="_blank" rel="noreferrer noopener"><GoMarkGithub className="header-link-icons" /></a>
        <a href="https://www.linkedin.com/in/erickimosilva/" target="_blank" rel="noreferrer noopener"><SiLinkedin className="header-link-icons" /></a>
        <a className="hollow-button" id="resume-button" href="https://docs.google.com/document/d/1vWMHKhyiTENZ53PYHdRbLE2cBvVP6fu3rBd5YWx5HrY/edit?usp=sharing" target="_blank" rel="noreferrer noopener">Resume</a> 
      </div>
    </div>
  )
}

export default Heading;
