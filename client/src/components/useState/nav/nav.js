import React from 'react'
import {Link} from 'react-router-dom'

function Nav (props) {

    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-6">                        
                        <Link to='/'>
                        <button className="btn btn-primary btn-lg">Home</button>
                        </Link>
                        <Link to='/about'>
                        <button className="btn btn-primary btn-lg">Why Hooks</button>
                        </Link>
                        <Link to='/useState'>
                        <button className="btn btn-primary btn-lg">UseState</button>
                        </Link>
                    </div>
                    <div className="col-sm-3"/>
                </div>
            </div>
            <br/>
            <br/>

          <div className="container">
          <div className="jumbotron " >
                <h1 className="display-4">React Hooks Practice</h1>
                <p className="lead">Learning Hooks through trial and Error</p>                      
            </div>
            </div>
            
        
        </div> 
    )

}

export default Nav