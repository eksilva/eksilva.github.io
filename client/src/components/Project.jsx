/* 

  The individual project component, containing:
  -Screenshot (Frame)
  -Project Description
  -Link to view the github repo

*/
import React from 'react';

const Project = ({ projectInfo }) => {
  return (
    <div className="project-wrapper">
      <a href={projectInfo.heroku} target="_blank" rel="noopener noreferrer">
        <div className="project-frame">
        <img className="project-img" src={projectInfo.image} alt={projectInfo.name}/>
        </div>
      </a>
      <div className="project-name">{projectInfo.name}</div>
      <div className="project-caption">{projectInfo.caption} <a className="view-code-link" href={projectInfo.github} target="_blank" rel="noopener noreferrer">View Code</a></div>
    </div>
  )
}

export default Project;
