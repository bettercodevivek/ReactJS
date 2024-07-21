import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

const Profile = ()=>{

   const {user} = useContext(UserContext);

   if(!user) {
    return (
        <div>
            please login first
        </div>
    )
   }
   else 
   return (
   <div>
    Welcome to the website {user.usernamek}
   </div>
   )

}

export default Profile;