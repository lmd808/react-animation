import React from 'react';
import {useState} from 'react';

const App= (props)=>  {

  const [hover, setHover] = useState(false);
  

  return (
 
    <div style={{background:'red', width:'300px', height:'200px'}}
      onMouseEnter={() => setHover(true) }
      onMouseLeave={() => setHover(false)}
      onChange={console.log(hover)}/>
     )
}

export default App;
