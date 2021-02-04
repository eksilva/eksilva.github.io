import React from 'react';

import Project from "./Project.jsx";

const Projects = () => {

  const projectsInfo = [{
    name: 'Roomie Ride',
    caption: 'Wait, are you riding with me or her? What time? Where from? Do you have spots left in your car? Now you know.'
  }, {
    name: 'Financial Calculator',
    caption: 'Basic "Financial Advisor" for your investment portfolio.'
  }, {
    name: 'Unus Annus',
    caption: 'Memento mori. Countdown timer to practice React Hooks.'
  }, {
    name: 'Basic Contact Form',
    caption: 'It\'s in the name.'
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
