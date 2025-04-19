// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home({ posts, deletePost, likePost }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="page-title">All Blog Posts</h2>
      {posts.length === 0 ? (
        <p className="no-posts">No posts yet. Click "Create Post" to get started!</p>
      ) : (
        <div className="post-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="post-actions">
                <button className="btn edit" onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>
                <button className="btn delete" onClick={() => deletePost(post.id)}>Delete</button>
                <button className="btn like" onClick={() => likePost(post.id)}>❤️ {post.likes || 0}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
