import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const Footer = ()=>{
    const {user} = useContext(UserContext);
    return (
      <>
      
      <h4>Hi {user.name}
      @ Footer-WeEat private Limited.All Rights reserved . @ 
      </h4>
      </>
    );
  }

export default Footer