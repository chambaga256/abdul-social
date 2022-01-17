import "./online.css";


export default function Online({user}) {
    return (
        <div>
              <ul className='rightbarFriendsList'>
         <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
              <span className='rightbarOnline'>  </span>
          
              </div>  
              <span className='rightbarUsername'> {user.username}</span>
         </li>
       </ul>
        </div>
    )
}
