import React from 'react';
import {useState} from 'react';

const UseStateBoxExample= (props)=>  {

  const [hover, setHover] = useState(false);
  let val = hover.toString(); 

 

  return (
 <div>
    <div style={{background:'red', width:'300px', height:'200px'}}
      onMouseEnter={() => setHover(true) }
      onMouseLeave={() => setHover(false)}
      onChange={console.log(hover)}/>

     
<h3>
      Hover over the box!
</h3>
  <h5>
      Check The console To Track Changes in State!
  </h5>
  <p>State of hover: {val} </p>
  </div>   )
}

export default UseStateBoxExample;
