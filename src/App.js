
import React, { lazy,Suspense } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import {IMG_CDN_URL} from "./component/constants"
import { createBrowserRouter , RouterProvider  , Outlet} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";


import ReactDOM, { createRoot } from "react-dom/client";
import Error from "./component/Error";
import ResturantMenu from "./component/ResturantMenu";
import Shimmer from "./component/shimmer";
// import Instamart from "./component/Instamart";

const Instamart = lazy( ()=> import("./component/Instamart"))





const AppLayout = () => {
   return (
    <>
    
    <Header/>
    <Outlet/>
    <Footer/>
    </>
   )

 }

 const appRouter = createBrowserRouter ([
  {
    path : "/" ,
    element : < AppLayout />,
    // element : <Body/>,
    errorElement : < Error/>,
    children : [
      {
        path : "/" ,
        element : < Body />,
        // errorElement : < Error/>
        
      },
      {
        path : "about" ,
        element : < About />,
        // errorElement : < Error/>
        
      },
      
      {
        path : "contact" ,
        element : < Contact />,
        // errorElement : < Error/>
        
      } ,
      {
        path : "/resturant/:resid" ,
        element : <ResturantMenu/>,
      },
      {
        path : "/Instamart" ,
        element :<Suspense fallback = {<Shimmer/>}><Instamart/></Suspense> ,
      }
    ]

    
  },
 ])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
