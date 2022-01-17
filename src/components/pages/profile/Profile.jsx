 import React from 'react'
import Feed from '../../feed/Feed';
import Rightbar from '../../feed/rightbar/Rightbar';
import Slidebar from '../../feed/slidebar/Sidebar';
 import Topbar from"../../topbars/Topbar";
import"./profile.css";
 export default function () {
     return (
        <>
        <Topbar />
        <div className="profile">
        <Slidebar />
            <div className="profileRight">
             <div className="profileCover">
             <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
             <img className='profileUserImg' src="/assets/person/5.jpeg" alt="" />
              
             </div>
             <div className="profileInfo">
             <h4 className='profileInfoName'>Abdul Murs</h4>    
             <span className='profileDesc'>Hello my friends</span>
             </div>
             <div className='profileRightTop'>
                </div>
    
             <div className='profileRightBottom'>
             <Feed />
             <Rightbar  profile/>
             </div>
           

            </div>
       
        
        </div>
       
   
           </> 
)
 }
 