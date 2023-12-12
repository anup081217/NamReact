
import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import {IMG_CDN_URL} from "./component/constants"


import ReactDOM, { createRoot } from "react-dom/client";


const AppLayout = () => {
   return (
    <>
    
    <Header/>
    <Body/>
    <Footer/>
    </>
   )

 }


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
