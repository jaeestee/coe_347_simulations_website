import React from 'react';
import Amesh from './Simulations/Amesh.gif'
import Bmesh from './Simulations/Bmesh.gif'
import Cmesh from './Simulations/Cmesh.gif'
import Dmesh from './Simulations/Dmesh.gif'
import Emesh from './Simulations/Emesh.gif'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


const RefinementMeshes: React.FC = () => {
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
    <h1>Refinement Meshes</h1>
    <h2>Mesh A</h2>
    <img src={Amesh} alt='Image' /> 
    <h2>Mesh B</h2>
    <img src={Bmesh} alt='Image' /> 
    <h2>Mesh C</h2>
    <img src={Cmesh} alt='Image' /> 
    <h2>Mesh D</h2>
    <img src={Dmesh} alt='Image' /> 
    <h2>Mesh E</h2>
    <img src={Emesh} alt='Image' /> 
  </div>
  );
};

export default RefinementMeshes;
