
import { IMG_CDN_URL } from "./constants";

const ResturantCard = ({name ,cloudinaryImageId,avgRating,cuisines,id}) =>{
    
    return (
       <div className="card"> 
        <img src = {IMG_CDN_URL+cloudinaryImageId} />
        <h2>{name} </h2>
        <h3>{avgRating}</h3>
        <h3>{cuisines.join(" , ")}</h3>
        <h2>{id}</h2>
        {/* <h2>{props.resturant.card.card.info.avgRating} Stars</h2> */}
        {/* <h3>{props.resturant.card.card.info.cuisines.join(" , ")}</h3> */}
        </div>
  
    )
  
  }

  export default ResturantCard; 