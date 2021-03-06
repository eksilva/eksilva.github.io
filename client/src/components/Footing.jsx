import React from 'react'

import { GrReactjs, GrNode } from "react-icons/gr";
import { SiWebpack, SiBabel } from 'react-icons/si'


const Footing = () => {
  return (
    <footer id="footing-wrapper">
      <div>This page was built using mainly </div>
      <div className="footing-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener"><GrReactjs className="footing-icons"/></a>
        <a href="https://webpack.js.org/" target="_blank" rel="noreferrer noopener"><SiWebpack className="footing-icons"/></a>
        <a href="https://babeljs.io/" target="_blank" rel="noreferrer noopener"><SiBabel className="footing-icons"/></a>
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener"><GrNode className="footing-icons"/></a>
      </div>
    </footer>
  )
}

export default Footing;
