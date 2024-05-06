import React from 'react';
import gif from './Simulations/200w.gif'

const Gif: React.FC = () => {
  //Fun little easter egg: Changes the tab name when the user goes off of it
  let docTitle = 'COE 347 Simulations';
  window.addEventListener('blur', () => {
    document.title = 'Sims Running...';
  })
  window.addEventListener('focus', () => {
    document.title = docTitle;
  })

  return (
  <div>
    <img src={gif} alt='Image' /> 
  </div>
  );
};

export default Gif;
