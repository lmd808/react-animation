import React from 'react'
import {Link} from 'react-router-dom'

function Nav (props) {

    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/useState'>UseState</Link>
            </nav>

        </div> 
    )

}

export default Nav