import React from 'react'
import {Link} from 'react-router-dom'
import hooksImage from '../../../images/hooks.jpg'

function CardContainer (){
    return(
    <div className="container">
        <div className="row">
            {/* card 1  */}
            <div className="col-sm-4 justify-content-center">
                <div className="card" style={{width: '18rem',  textAlign: 'center'}}>
                    <img className="card-img-top" src={hooksImage} alt="Card  cap"/>
                <div className="card-body">
                    <p className="card-text"><Link to='/useState'>UseState Hooks Examples</Link></p>
                 </div>
                 </div>         
            </div>   
             {/*card 2  */}
             <div className="col-sm-4 justify-content-center">
                <div className="card" style={{width: '18rem', textAlign: 'center'}}>
                    <img class="card-img-top" src={hooksImage} alt="Card  cap"/>
                <div className="card-body">
                    <p className="card-text"><Link to='/useContext'>UseContext Hooks Examples</Link></p>
                 </div>
                 </div>         
            </div>   
             {/* card 3  */}
             <div className="col-sm-4 justify-content-center">
                <div className="card" style={{width: '18rem',  textAlign: 'center'}}>
                    <img className="card-img-top" src={hooksImage} alt="Card  cap"/>
                <div className="card-body">
                    <p className="card-text"><Link to='/'>UseMemo Hooks Examples (comming Soon)</ Link></p>
                 </div>
                 </div>         
            </div>    
        </div>    

    </div>
    )

}

export default CardContainer 