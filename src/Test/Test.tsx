import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from '.';
import { Gif, RefinementMeshes, Vertex10, Vertex20, Vertex30 } from './DifferentRoutes';

const Test: React.FC = () => {
  //Fun little easter egg: Changes the tab name when the user goes off of it
  let docTitle = 'COE 347 Simulations';
  window.addEventListener('blur', () => {
    document.title = 'Sims Running...';
  })
  window.addEventListener('focus', () => {
    document.title = docTitle;
  })

  return (  
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/minion" element={<Gif />} />
        <Route path="/refinementMeshes" element={<RefinementMeshes />} />
        <Route path="/vertex10" element={<Vertex10 />} />
        <Route path="/vertex20" element={<Vertex20 />} />
        <Route path="/vertex30" element={<Vertex30 />} />
      </Routes>
  );
};

export default Test;
