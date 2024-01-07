import {Resturantlist} from "./constants"
import ResturantCard from "./Reaturantcard";
import {useState ,useEffect} from "react";
import Shimmer from "./shimmer";
import filterData from "../../utils/Helper";
import useOnline from "../../utils/useOnline";








const Body = ()=>{
    
    const [searchinput , setsearchinput] = useState("") ;

    const [searchClicked , setsearchClicked] = useState('search');
    const [allResturants, setallResturants] = useState([]);
    const [filteredResturants, setfilteredResturants] = useState([]);

    useEffect(() => {
        // API call
        getResturant();
      }, []);


   async function getResturant () {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

    const json =  await data.json();
    console.log(json)
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setallResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   

   }

   console.log('render')

  //offline and online 
   
  const isOnline = useOnline();
  console.log('bb',isOnline)
  if (!isOnline) { 
    return (<h1> 🟥 You are offline,Check your internet connection</h1>)
    
  }
   
  // if (!allResturants)  return null ;

  // if (filteredResturants === 0 ) return("No results for this input");
  
  //  

    return  allResturants?.length === 0 ? (<Shimmer/>) : (
        
    <>
      <div className = "search-container p-5 bg-red-200 my-5 ">

         <input 
         type = "text" 
         className = "search-input p-3 m-1 rounded-full hover:bg-gray-200 focus:bg-red-100" 
          placeholder = "Search.." 
          value  = {searchinput}
          
          onChange = {(e)=> {setsearchinput(e.target.value)}}
          />
        
         <button className ="p-3 m-1 bg-purple-400 hover:bg-violet-600 text-white rounded-full " 
        //**  onClick={ ()=> {setsearchClicked("search - clicked ")}} */ 
        onClick={ ()=> {
            
            const data = filterData(searchinput,allResturants);
            setfilteredResturants(data);
        
        } }
        
        
        > {searchClicked}</button>
         <h2>{searchClicked}</h2>   
         
      </div>

      

      <div className="flex flex-wrap">
          {
          filteredResturants?.map((resturant) => {
              return(
              // < ResturantCard {...resturant.card.card.info} key ={resturant.card.card.info} />
            < ResturantCard {...resturant.info} key ={resturant.info} />
              )
          }
              )
          }
        
          
        
          
  
  
      {/* <ResturantCard {...Resturantlist[0].card.card.info} />
      <ResturantCard {...Resturantlist[1].card.card.info} />
      <ResturantCard {...Resturantlist[2].card.card.info}/>
      <ResturantCard {...Resturantlist[3].card.card.info}/>
      <ResturantCard {...Resturantlist[4].card.card.info}/>
      <ResturantCard {...Resturantlist[5].card.card.info}/>
      <ResturantCard {...Resturantlist[6].card.card.info}/>
      <ResturantCard {...Resturantlist[7].card.card.info}/> */}
     
      
      
      </div>
      </>
    );
  }

  export default Body 