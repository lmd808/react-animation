import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UseStateMaster from './components/useState/useStateMaster'; 
import UseStateBoxExample from './components/useState/useStateBoxHover'; 
import Nav from './components/useState/nav/nav'


const App = (props)=>  {

  return (    

       <Router>
         {/* <Nav/> */}
          <Switch>
            <Route exact path="/" component={Nav} />
            <Route exact path="/about" component={UseStateMaster}/>
            <Route exact path="/useState" component={UseStateMaster}/>
            <Route path="/BoxExample" component={UseStateBoxExample}/>
          </Switch>
         </Router>
     )
}

export default App;
