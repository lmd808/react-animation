import React from 'react';
import {
  Link
} from "react-router-dom";
import NavBar from '../useState/nav/navBar'


const UseContextMaster = ()=>  { 

  return (
 
    <div>
      <NavBar/>
      <div className="jumbotron" >
                <h1 className="display-4" style={{textAlign:"center"}}>Use Context</h1>
                <p className="lead" style={{textAlign:"center"}}>Use Context Master List of Activities </p>                      
      </div>

    <ol>
      <li>
        <Link to="/userContext">User Context</Link>
      </li>
      <li>
        <Link to="/protectingRoutes">Protecting routes</Link>
      </li>
      <li>
        <Link to="/ProtectingFunctionality">Protecting functionality</Link>
      </li>
    </ol>
  </div>
  )
     
}

export default UseContextMaster;