import {Resturantlist} from "./constants"
import ResturantCard from "./Reaturantcard";
import {useState ,useEffect} from "react";


function filterData(searchinput,resturants) {
    const filterData =
    resturants.filter((resturant) => resturant.card.card.info.name.includes(searchinput) 
    )
    return filterData;
}



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
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setallResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredResturants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   

   }

   console.log('render')

   

    

    return  (
        
    <>
      <div className = "search-container">

         <input 
         type = "text" 
         className = "search-input" 
          placeholder = "search" 
          value  = {searchinput}
          
          onChange = {(e)=> {setsearchinput(e.target.value)}}
          />
        
         <button className ="search-btn" 
        //**  onClick={ ()=> {setsearchClicked("search - clicked ")}} */ 
        onClick={ ()=> {
            
            const data = filterData(searchinput,allResturants);
            setfilteredResturants(data);
        
        } }
        
        
        > search - {searchClicked}</button>
         <h2>{searchClicked}</h2>   
         
      </div>

      

      <div className="resturant-list">
          {
          filteredResturants.map((resturant) => {
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