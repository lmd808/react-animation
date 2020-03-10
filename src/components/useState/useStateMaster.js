import React from 'react';
import {
  Link
} from "react-router-dom";
import NavBar from './nav/navBar'
import Footer from './nav/footer'


const UseStateMaster = ()=>  { 

  return (
 
    <div>
      <NavBar/>
      <div className="jumbotron" >
                <h1 className="display-4" style={{textAlign:"center"}}>Use State</h1>
                <p className="lead" style={{textAlign:"center"}}>Use State Master List of Activities </p>                      
      </div>

    <ol>
      <li>
        <Link to="/BoxExample">useState Box Example</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/register">Register Step Form</Link>
      </li>
    </ol>
    <Footer/>
  </div>
  )
     
}

export default UseStateMaster ;
