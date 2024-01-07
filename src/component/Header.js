/*This file contain header and title */

import React, { useState } from 'react'
import wieat from "../assets/img/wieat.png"
import { Link } from "react-router-dom";
import useOnline from '../../utils/useOnline';


// const LoggedInUser  = ()=> {
//    return true ;
// }

const Title = () => {
  return (
    <a href = "/">
    <img 
      className= "h-28 px-2"
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
   const isOnline = useOnline()
    return (
      <div className="flex justify-between bg-red-200 shadow-lg ">
        <Title/>
        {/* <img 
        className="logo"
        src="https://wieat.com/wp-content/uploads/2020/05/wieat.png" /> */}
        <h1>{TitleHeading}</h1>
        <button onClick={()=> setTitleHeading("Food Villa") }>New Titlehead {TitleHeading}</button>


        <div className="nav-items" >
          <ul className="flex py-10 ">
            <li className ="px-2"><Link to = '/'>Home</Link></li>
            
            <li className ="px-2"> <Link to='/about'>About</Link></li>
            <li className ="px-2"> <Link to = '/contact'>Contact</Link></li>
            <li className ="px-2"> <Link to = '/Instamart'>Instamart</Link></li>

            <li className ="px-2">Cart</li>
            
          </ul>
          
          <h3>{isOnline ? '🟢-Online' : '🔴-offline '}</h3>
          
        </div>
        {
        isLoggedIn ? <button onClick={()=> setisLoggedin(false)}>Logout</button> : <button onClick={()=> setisLoggedin(true)}>Login</button>
        }
       

        
      </div>
    );
  };

export default Header
