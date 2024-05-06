import React from 'react';
import Amesh from './Simulations/20Va0.gif';
import Bmesh from './Simulations/20Va10.gif';
import Cmesh from './Simulations/20Va20.gif';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


const Vertex20: React.FC = () => {
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
    <Button style={{backgroundColor: '#80ced6', borderRadius: 5}}><Link to='/' style={{textDecoration:'none', fontSize: 20, color:'black'}}>Go Back</Link></Button>
    <h1>Meshes with Vertex Angle of 20 Degrees</h1>
    <h2>0 Angle of Attack</h2>
    <img src={Amesh} alt='Image' /> 
    <h2>10 Angle of Attack</h2>
    <img src={Bmesh} alt='Image' /> 
    <h2>20 Angle of Attack</h2>
    <img src={Cmesh} alt='Image' /> 
  </div>
  );
};

export default Vertex20;
