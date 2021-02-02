import React from 'react'

const About = () => {
  return (
    <div id="about-wrapper">
      <div id="greeting">Hi, my name is</div>
      <div className="my-name">Kimo Silva.</div>
      <span className="my-name" id="job-title" >I'm a Full Stack Developer<span className="my-name" id="come-on-guy">(freshly-baked, too).</span></span>
      <div id="about-paragraph">Budding software engineer based out wherever you're hiring (i.e. remote), and I specialize in minimal complaining + whatever needs to get done.</div>
    </div>
  )
}

export default About;
