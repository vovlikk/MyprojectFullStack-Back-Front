import { useState } from "react";
import UserProgressHeader from "../UserProgressComponents/UserProgressHeader";
import UserProgressHome from "../UserProgressComponents/UserProgressHome";


function UserProgressPage(){
    return(
        <div>
            <UserProgressHeader />
            <UserProgressHome />
        </div>
    )
}


export default UserProgressPage;