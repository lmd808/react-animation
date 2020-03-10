import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UseStateMaster from './components/useState/useStateMaster';
import WhyReact from './components/useState/whyHooks' 
import UseStateBoxExample from './components/useState/useStateBoxHover'; 
import Nav from './components/useState/nav/nav'
import UseContextMaster from './components/useContext/useContextMaster';  


const App = (props)=>  {

  return (    

       <Router>
         {/* <Nav/> */}
          <Switch>
            <Route exact path="/" component={Nav} />
            <Route exact path="/about" component={WhyReact}/>
            <Route exact path="/useState" component={UseStateMaster}/>
            <Route exact path="/useContext" component={UseContextMaster}/>
            <Route path="/BoxExample" component={UseStateBoxExample}/>
          </Switch>
         </Router>
     )
}

export default App;
