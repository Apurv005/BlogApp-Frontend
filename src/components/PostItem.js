// src/components/PostItem.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ post, onDelete, onLike }) => {
  const navigate = useNavigate();

  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-actions">
        <button className="like-btn" onClick={() => onLike(post.id)}>
          ❤️ {post.likes}
        </button>
        <div className="right-actions">
          <button
            className="edit-btn"
            onClick={() => navigate(`/edit/${post.id}`)}
          >
            ✏️ Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(post.id)}>
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
