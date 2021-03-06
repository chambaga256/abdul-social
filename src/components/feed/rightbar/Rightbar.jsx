import "./rightbar.css";
import { Users } from "../../../dummyData";
import Online from "../../online/Online";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Add, Remove } from "@material-ui/icons";

export default function Rightbar() {
  
  const [friends, setFriends] = useState([]);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>

         
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">user.city</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">user.from</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
             Single
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
        
            
             <div className="rightbarFollowing">
                <img
                  src=
                     "/assets/person/noAvatar.png"
                  
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">username</span>
              </div>
            
        
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         <ProfileRightbar /> 
      </div>
    </div>
  );
}
