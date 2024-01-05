// const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING" + resid)

// single rest API
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9492616&lng=77.722105&restaurantId=241961&catalog_qa=undefined&query=Biryani&submitAction=ENTER 
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9492616&lng=77.722105&restaurantId=250298
34301

import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import {IMG_CDN_URL}  from './constants'
import Shimmer from './shimmer';
import useResturant from '../../utils/useResturant';


const ResturantMenu = () => {
  const params = useParams();
  const {resid} = params;
  console.log(params);
  
   
const Resturant = useResturant(resid);



  return !Resturant ? (
    <Shimmer />
  ) : (
    <div className='Menu'>
     
    <h1>Resturant id : {resid} </h1>
    <h2>{Resturant?.cards[0]?.card?.card?.info?.name}</h2>
    <img src ={ IMG_CDN_URL +Resturant?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
    <h2>City :{Resturant?.cards[0]?.card?.card?.info?.city}</h2> 
    <h2> locality : {Resturant?.cards[0]?.card?.card?.info?.areaName}</h2>
    <h2> costForTwo :{Resturant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
    <h2> Rating :{Resturant?.cards[0]?.card?.card?.info?.avgRating} Stars</h2> 
    </div> 
   
   
    
  )  


};

export default ResturantMenu;