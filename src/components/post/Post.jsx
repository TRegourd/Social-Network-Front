import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Posts, Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const findUserId = Users.filter((user) => user.id === post.userId);

  const [like, setlike] = useState(post.like);
  const [isLike, setIsLike] = useState("false");

  const likeHandleClick = () => {
    setlike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={findUserId[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{findUserId[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              alt=""
              onClick={likeHandleClick}
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              alt=""
              onClick={likeHandleClick}
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
