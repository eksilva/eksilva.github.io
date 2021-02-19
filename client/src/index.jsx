import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Heading from './components/Heading.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footing from "./components/Footing.jsx";

const Index = () => {
  return (
    <div id="index-wrapper">
      <Heading />
      <div id="content-wrapper">
        <About />
        <Projects />
        <div id="footing">
          <Footing />
        </div>
      </div>
    </div>
  )
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));