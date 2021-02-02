import React from 'react'

import { GrReactjs, GrNode } from "react-icons/gr";
import { SiWebpack, SiBabel } from 'react-icons/si'

const Footing = () => {
  return (
    <div id="footing-wrapper">
      <div className="footing-icons">This page was built using mainly: [</div>
      <GrReactjs className="footing-icons"/>
      <SiWebpack className="footing-icons"/>
      <SiBabel className="footing-icons"/>
      <GrNode className="footing-icons"/>
      <div>]</div>
    </div>
  )
}

export default Footing;
