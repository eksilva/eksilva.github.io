import React from 'react';

import Project from "./Project.jsx";

const Projects = () => {

  const projectsInfo = [{
    name: 'Financial Calculator',
    caption: 'Basic "Financial Advisor" for your investment portfolio. And a vehicle for me to learn React-Redux',
    image: `${__dirname}assets/FinancialScreen.webp`,
    github: 'https://github.com/eksilva/BPRedux',
    heroku: 'https://fin-react-redux.herokuapp.com/'
  }, {
    name: 'Unus Annus',
    caption: 'Memento mori. Countdown timer to practice React Hooks (volume up! [Warning: may require a few refreshes]).',
    image: `${__dirname}assets/UnusAnnusScreen.webp`,
    github: 'https://github.com/eksilva/UnusAnnus',
    heroku: 'https://unus-annus-kimo.herokuapp.com/'
  }, {
    name: 'Basic Contact Form.',
    caption: 'Dabbling in styled-components. Makes some Axios requests. Requires input. Open console on the page to view payload.',
    image: `${__dirname}assets/ContactScreen.webp`,
    github: 'https://github.com/eksilva/JUCCodingProject',
    heroku: 'http://basic-contact-form-kimo.herokuapp.com/'
  }, {
    name: 'Roomie Ride',
    caption: 'Wait, are you riding with me or her? When? Where from? Do you have any spots left? Now you know. (In progress)',
    image: `${__dirname}assets/RoomieScreen.webp`,
    github: 'https://github.com/eksilva/RoomieRide',
    heroku: 'https://github.com/eksilva/RoomieRide'
  }];

  const projects = projectsInfo.map((project) => <Project projectInfo={project} key={project.name}/>);

  return (
    <div id="projects-section-wrapper">
      <h3 id="projects-headline">Here are some projects:</h3>
      <div id="projects-wrapper">{projects}</div>
    </div>
  )
}

export default Projects;
