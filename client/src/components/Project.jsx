import React from 'react';

const Project = (props) => {
  return (
    <div className="project-wrapper">
      <div className="project-frame"></div>
      <div className="project-name">{props.projectInfo.name}</div>
      <div className="project-caption">{props.projectInfo.caption}</div>
    </div>
  )
}

export default Project;
