import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import texas from './texaslogo.png';

const App: React.FC = () => {
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
    <img src={texas} style={{width: 100}}></img>
    <h1>Hello and welcome to the simulation website!</h1>
    <h3>This was a website created for the COE 347 (Computational Fluid Dynamics) class' Final Project at The University of Texas at Austin.
        <br></br>
        Contributors for this project include: Steven Oh, Woojoo Lee, and Nicolas Giglio.
    </h3>

    <div>
        <br></br>
        <h4>Click below to view the different simulations ran: </h4>
        <Button style={{backgroundColor: '#80ced6', borderRadius: 5}}><Link to='/refinementMeshes' style={{textDecoration:'none', fontSize: 20, color:'black'}}>Refinement Meshes</Link></Button>
          <br></br>
        <Button style={{backgroundColor: '#80ced6', borderRadius: 5}}><Link to='/vertex10' style={{textDecoration:'none', fontSize: 20, color:'black'}}>Vertex Angle 10 Meshes</Link></Button>
        <br></br>
        <Button style={{backgroundColor: '#80ced6', borderRadius: 5}}><Link to='/vertex20' style={{textDecoration:'none', fontSize: 20, color:'black'}}>Vertex Angle 20 Meshes</Link></Button>
        <br></br>
        <Button style={{backgroundColor: '#80ced6', borderRadius: 5}}><Link to='/vertex30' style={{textDecoration:'none', fontSize: 20, color:'black'}}>Vertex Angle 30 Meshes</Link></Button>
    </div>
  </div>
  );
};

export default App;
