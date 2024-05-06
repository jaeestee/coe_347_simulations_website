import React from 'react';
import gif from './200w.gif'

const Test: React.FC = () => {
  //Fun little easter egg: Changes the tab name when the user goes off of it
  let docTitle = document.title;
  window.addEventListener('blur', () => {
    document.title = 'come back!';
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

export default Test;
