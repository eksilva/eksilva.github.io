import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Heading from './components/Heading.jsx';
import About from './components/About.jsx';

const Index = () => {
  return (
    <div id="index-wrapper">
      <Heading />
      <About />
    </div>
  )
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));