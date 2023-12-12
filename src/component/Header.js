/*This file contain header and title */

import React, { useState } from 'react'

const Title = () => {
  return (
    <a href = "/">
    <img 
      className="logo"
      alt = "logo"
      src="https://wieat.com/wp-content/uploads/2020/05/wieat.png" />
      
      </a>
  )
}



const Header = () => {
   const [TitleHeading , setTitleHeading] = useState("WiEat")
    return (
      <div className="header">
        <Title/>
        {/* <img 
        className="logo"
        src="https://wieat.com/wp-content/uploads/2020/05/wieat.png" /> */}
        <h1>{TitleHeading}</h1>
        <button onClick={()=> setTitleHeading("Food Villa") }>New Titlehead</button>


        <div className="nav-items" >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            
          </ul>
        </div>
      </div>
    );
  };

export default Header
