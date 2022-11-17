import React from "react";
import ModalApp from "./DeleteCommand";
function PostCard(post) {
  const editOnClick = () => {
    post.delete(post.id);
    // alert("Do you want to delete")
  };
  return (
    <div className="post-card">
      <div className="post">
        <div className="post-profile">
          <img src={post.image} alt="profile" className="profile-photo" />
          <div className="post-profile-details">
            <div className="profile-name">{post.name}</div>
            <div className="designation">{post.designation}</div>
            <div className="posting-time">{post.time}</div>
          </div>
        </div>
        {/* <FontAwesomeIcon icon={faEllipsis} onClick={getPostId} className="point"/> */}
        <ModalApp editOnClick={editOnClick} />
      </div>
      <div className="comment">{post.postContent}</div>
    </div>
  );
}
export default PostCard;
