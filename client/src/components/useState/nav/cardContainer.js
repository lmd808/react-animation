import React from 'react'
import {Link} from 'react-router-dom'
import useStateGif from '../../../images/usestate.gif'

function CardContainer (){
    return(
    <div className="container">
        <div className="row">
            {/* card 1  */}
            <div className="col-sm-6 justify-content-center">
                <div className="card" style={{width: '18rem',  textAlign: 'center'}}>
                    <img className="card-img-top" src={useStateGif} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text"><Link to='/useState'>UseState Hooks Examples</Link></p>
                 </div>
                 </div>         
            </div>   
             {/*card 2  */}
             <div className="col-sm-6 justify-content-center">
                <div className="card" style={{width: '18rem', textAlign: 'center'}}>
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text"><Link to='/'>UseContext Hooks Examples</Link></p>
                 </div>
                 </div>         
            </div>    
        </div>    

    </div>
    )

}

export default CardContainer 