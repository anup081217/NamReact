import { createContext } from "react";

const UserContext = createContext ({
    user :{
    name : 'Arya' ,
    palce : 'UK' ,
    email : "arya@gmail.com"
},
user2 :{
    name : 'anup' ,
    palce : 'UK' ,
    email : "anup@gmail.com"
}
}
)

UserContext.displayName = UserContext;

export default UserContext;