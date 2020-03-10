import React from 'react';
import {
  Link
} from "react-router-dom";
import NavBar from '../useState/nav/navBar'
import Footer from '../useState/nav/footer'


const UseContextMaster = ()=>  { 

  return (
 
    <div>
      <NavBar/>
      <div className="jumbotron" >
                <h1 className="display-4" style={{textAlign:"center"}}>Use Context</h1>
                <p className="lead" style={{textAlign:"center"}}>Use Context Master List of Activities </p>                      
      </div>
      
      <div className= 'container'>
      <div className="row">
        <div className="col-sm">
          <div className="card" style={{width: '100%'}}>
            <div className="card-header">
            Use Context Examples
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><Link to="/userContext">User Context</Link></li>
              <li className="list-group-item"> <Link to="/protectingRoutes">Protecting routes</Link></li>
              <li className="list-group-item"><Link to="/ProtectingFunctionality">Protecting functionality</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>   
    <Footer/>
  </div>
  )
     
}

export default UseContextMaster;