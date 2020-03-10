import React from 'react'; 
import {Link} from 'react-router-dom'

function NavBar (){
return(
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link to="/" class="navbar-brand">React Hooks: </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to='/'>Home</Link>
      </li>
      <li class="nav-item">
      <Link to='/about'>Why Hooks</Link>
      </li>
      <li class="nav-item">
      <Link to='/useState'>UseState</Link>
      </li>
      <li class="nav-item">
      <Link to='/useContext'>Use Context</Link>
      </li>
    </ul>
  </div>
</nav>
)
}

export default NavBar