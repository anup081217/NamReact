import React, { useEffect, useState } from 'react'

const useOnline = () => {

   const [isOnline , setIsOnline] = useState(true);

    useEffect( () => {
        const handleOnline = () => {
            setIsOnline(true)} ;
        window.addEventListener("online", handleOnline
        ) ;
        
        const handleOffline = () => {
            setIsOnline(false)}
        window.addEventListener("offline",handleOffline );

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline",handleOffline );
           }
    } ,[] )

// useEffect(() => {
//     const handleOnline = () => {
//       setIsOnline(true);
//     };
//     const handleOffline = () => {
//       setIsOnline(false);
//     };
//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);
//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);



  return isOnline;
    
console.log('mm',isOnline);
   
}



export default useOnline;