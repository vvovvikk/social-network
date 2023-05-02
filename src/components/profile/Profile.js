import React from "react";

import "./profile.css"
import Posts from "./posts/Posts";
import Profilinfo from "./profilinfo/Profilinfo"




function Profile(props){
    return(
      <div className="profile">
        <Profilinfo name={props.name} />
        <Posts postData={props.profilePage.postData} />
      </div>
    )
  }


export default Profile;