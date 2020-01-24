import React from 'react';
import Navbar from '../components/Navbar';

function NotFound(){
  return (

    <div>
      <Navbar css="navbar" />

     
      <h1 style={{"paddingTop":5+"rem"}}>Page not Found</h1>
     </div>
  )
}

export default NotFound;