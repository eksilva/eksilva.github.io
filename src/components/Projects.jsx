import React from 'react';

import Project from "./Project.jsx";

const Projects = () => {

  const projectsInfo = [{
    name: 'Roomie Ride',
    caption: 'Wait, are you riding with me or her? When? Where from? Do you have any spots left? Now you know.',
    image: '/assets/RoomieScreen.png',
    github: 'https://github.com/eksilva/RoomieRide'
  }, {
    name: 'Financial Calculator',
    caption: 'Basic "Financial Advisor" for your investment portfolio.',
    image: '/assets/FinancialScreen.png',
    github: 'https://github.com/eksilva/BPProject'
  }, {
    name: 'Unus Annus',
    caption: 'Memento mori. Countdown timer to practice React Hooks.',
    image: '/assets/UnusAnnusScreen.png',
    github: 'https://github.com/eksilva/UnusAnnus'
  }, {
    name: 'Basic Contact Form',
    caption: 'Dabbling in styled-components.',
    image: '/assets/ContactScreen.png',
    github: 'https://github.com/eksilva/JUCCodingProject'
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
