import React from 'react'
import NavBar from './navBar'
import CardContainer from './cardContainer'

function Nav (props) {

    return (
        <div >
            <NavBar/>
          <div className="jumbotron" >
                <h1 className="display-4" style={{textAlign:"center"}}>React Hooks Practice</h1>
                <p className="lead" style={{textAlign:"center"}}>Learning Hooks through trial and Error</p>                      
           </div>
           <CardContainer/>                  
        
        </div> 
    )

}

export default Nav