import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      
        <NavLink to="/"><h3>Homepage</h3></NavLink>
        <NavLink to="/About"><h3>About</h3></NavLink>
        <NavLink to="/Contact"><h3>Contact</h3></NavLink>
    </nav>
  )
}

export default Navigation