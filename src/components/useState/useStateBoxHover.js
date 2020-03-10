import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import Footer from './nav/footer'


const UseStateBoxExample= (props)=>  {

  const [hover, setHover] = useState(false);
  let val = hover.toString(); 

 

  return (
 <div className="container">
   <div className="row justify-content-center">
     
     <div className="col-sm-10 offset-2 justify-content-center">
     <div style={{background:'red', maxWidth:'600px', height:'200px'}}
      onMouseEnter={() => setHover(true) }
      onMouseLeave={() => setHover(false)}
      onChange={console.log(hover)}/>     
              <h3 >
                Hover over the box! Monitor the state below: 
              </h3>
              <br/>
              <p>State of hover: {val} </p>
     
        </div> 
        

     </div>
     <br/>
     <div className="row">
       <div className="col-sm">
         <h1>What's happening here?</h1>
         <h5>Extremely Basic monitoring of state</h5>

         <p>In short we are adding React State to our functional component using the useState hook during a onMouseEnter/onMouseLeave event. In this example the state that we are monitoring is called 'hover'</p>
         <p>
           Traditionally state would be declared in a class component by accessing the state component and adding new keys to it. However with use state you declare a state variable like the following: 
           <br/> 
           <div style={{textAlign: 'center'}} >const [hover, setHover] = useState(false);</div>
           <br/>
           Here we create our state variable (hover), a call back function to set the value of hover thought the component (setHover) and set it the useState hook. The usestate hook takes a single parameter- the initial state. 
           This state can be be of any data type. useState does NOT need to be an object, but it could be could be. In this example use state's initial value is 'false' a boolean value.            

           
         </p>
         <Link to="/useState">UseState Examples</Link>
         <br/>
         <Link to="/">Home</Link>




       </div>
     </div>
     <Footer/>
   </div>
      )
}

export default UseStateBoxExample;
