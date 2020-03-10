import React from 'react'
import NavBar from './navBar'
import {Link} from 'react-router-dom'
import CardContainer from './cardContainer'
import Footer from './footer';

function Nav (props) {

    return (
        <div >
            <NavBar/>
          <div className="jumbotron" >
                <h1 className="display-4" style={{textAlign:"center"}}>React Hooks Practice</h1>
                <p className="lead" style={{textAlign:"center"}}>Learning Hooks through trial and Error</p>                      
           </div>
           <CardContainer/>                  
           <Footer/>
                
        </div> 
    )

}

export default Nav