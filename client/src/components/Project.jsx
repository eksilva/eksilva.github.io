import React from 'react';

const Project = (props) => {
  return (
    <div className="project-wrapper">
      <a href={props.projectInfo.heroku} target="_blank" rel="noopener noreferrer">
        <div className="project-frame">
        <img className="project-img" src={props.projectInfo.image} alt={props.projectInfo.name}/>
        </div>
      </a>
      <div className="project-name">{props.projectInfo.name}</div>
      <div className="project-caption">{props.projectInfo.caption} <a className="view-code-link" href={props.projectInfo.github}>View Code</a></div>
    </div>
  )
}

export default Project;
