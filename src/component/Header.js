/*This file contain header and title */

import React, { useState } from 'react'
import wieat from "../assets/img/wieat.png"
import { Link } from "react-router-dom";


// const LoggedInUser  = ()=> {
//    return true ;
// }

const Title = () => {
  return (
    <a href = "/">
    <img 
      className="logo"
      alt = "logo"
      //IF WE want to USE CDN FOR IMAGE USE BELOW
      // src="https://wieat.com/wp-content/uploads/2020/05/wieat.png" />
      // IF U WANT O USE LOCAL IMAGE USE AS A PROP AND NEED TO IMPORT THE IMAGE FROM FOLDER 
      src = {wieat} />
      
      </a>
  )
}



const Header = () => {
   const [isLoggedIn, setisLoggedin] = useState(true)
   const [TitleHeading , setTitleHeading] = useState("WiEat")
    return (
      <div className="header">
        <Title/>
        {/* <img 
        className="logo"
        src="https://wieat.com/wp-content/uploads/2020/05/wieat.png" /> */}
        <h1>{TitleHeading}</h1>
        <button onClick={()=> setTitleHeading("Food Villa") }>New Titlehead {TitleHeading}</button>


        <div className="nav-items" >
          <ul>
            <li><Link to = '/'>Home</Link></li>
            
            <li> <Link to='/about'>About</Link></li>
            <li> <Link to = '/contact'>Contact</Link></li>
            <li>Cart</li>
            
          </ul>
        </div>
        {
        isLoggedIn ? <button onClick={()=> setisLoggedin(false)}>Logout</button> : <button onClick={()=> setisLoggedin(true)}>Login</button>
        }
       

        
      </div>
    );
  };

export default Header
