import React from 'react';

import Project from "./Project.jsx";
console.log(__dirname);
const Projects = () => {

  const projectsInfo = [{
    name: 'Roomie Ride',
    caption: 'Wait, are you riding with me or her? When? Where from? Do you have any spots left? Now you know.',
    image: `${__dirname}assets/RoomieScreen.webp`,
    github: 'https://github.com/eksilva/RoomieRide',
    heroku: 'https://github.com/eksilva/RoomieRide'
  }, {
    name: 'Financial Calculator',
    caption: 'Basic "Financial Advisor" for your investment portfolio.',
    image: `${__dirname}assets/FinancialScreen.webp`,
    github: 'https://github.com/eksilva/BPProject',
    heroku: 'https://fin-react-redux.herokuapp.com/'
  }, {
    name: 'Unus Annus',
    caption: 'Memento mori. Countdown timer to practice React Hooks.',
    image: `${__dirname}assets/UnusAnnusScreen.webp`,
    github: 'https://github.com/eksilva/UnusAnnus',
    heroku: 'https://unus-annus-kimo.herokuapp.com/'
  }, {
    name: 'Basic Contact Form',
    caption: 'Dabbling in styled-components.',
    image: `${__dirname}assets/ContactScreen.webp`,
    github: 'https://github.com/eksilva/JUCCodingProject',
    heroku: 'http://basic-contact-form-kimo.herokuapp.com/'
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
