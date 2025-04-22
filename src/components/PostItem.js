import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ post, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="post-actions">
      // Feature added for developer task
        <button onClick={() => onLike(post.id)}>❤️ {post.likes}</button>
        <button onClick={() => navigate(`/edit/${post.id}`)}>✏️</button>
        <button onClick={() => onDelete(post.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default PostItem;
