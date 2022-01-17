import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Post({ post }) {
  const [ like,setLike]  = useState(post.like)
  const[isliked ,setIsLinked] = useState(false);
  const likeHandler =()=>{
  
     setLike(isliked ? like-1 : like+1)
     setIsLinked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <img src={post.photo} alt="" className="postProfileImg" />
            <span className="postUsername">username</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert /> 
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc }</span>
          <img className="postImg" src="assets/person/4.jpeg"
                 alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src= "/assets/like.png" onClick={likeHandler}
                
              alt=""
            />
            <img
              className="likeIcon"
              src= "/assets/heart.png" onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
