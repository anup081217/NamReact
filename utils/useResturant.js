import { FETCH_MENU_URL } from "../src/component/constants";
import { useState ,useEffect } from "react";


const useResturant = (resid) =>{
    const [ Resturant ,setResturant] = useState(null);

    //fetch data
  
  useEffect (()=> {
    getResturantInfo()
    } ,[]);
  
    async function getResturantInfo() {
      const data = await fetch(FETCH_MENU_URL+resid);
      const json = await data.json();
      console.log(json);
      setResturant(json.data); 
      console.log(json.data);
      
    };
    //return data
    return Resturant ;
}

export default useResturant 